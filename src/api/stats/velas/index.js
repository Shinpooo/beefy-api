// const getTrisolarisApys = require('./getTrisolarisApys');
// const getAuroraBifiGovApy = require('./getAuroraBifiGovApy');
// const getTriMinichefApys = require('./getTriMinichefApys');
// const getSolaceApy = require('./getSolaceApy');
// const { getAuroraBifiMaxiApy } = require('./getAuroraBifiMaxiApy');
const getWagLpApys = require('./getWagLpApys');

const getApys = [
  // getTrisolarisApys,
  // getAuroraBifiGovApy,
  // getTriMinichefApys,
  // getSolaceApy,
  // getAuroraBifiMaxiApy,
  getWagLpApys,
];

const getVelasApys = async () => {
  let apys = {};
  let apyBreakdowns = {};

  let promises = [];
  getApys.forEach(getApy => promises.push(getApy()));
  const results = await Promise.allSettled(promises);

  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getVelasApys error', result.reason);
      continue;
    }

    // Set default APY values
    let mappedApyValues = result.value;
    let mappedApyBreakdownValues = {};

    // Loop through key values and move default breakdown format
    // To require totalApy key
    for (const [key, value] of Object.entries(result.value)) {
      mappedApyBreakdownValues[key] = {
        totalApy: value,
      };
    }

    // Break out to apy and breakdowns if possible
    let hasApyBreakdowns = 'apyBreakdowns' in result.value;
    if (hasApyBreakdowns) {
      mappedApyValues = result.value.apys;
      mappedApyBreakdownValues = result.value.apyBreakdowns;
    }

    apys = { ...apys, ...mappedApyValues };

    apyBreakdowns = { ...apyBreakdowns, ...mappedApyBreakdownValues };
  }

  return {
    apys,
    apyBreakdowns,
  };
};

module.exports = { getVelasApys };

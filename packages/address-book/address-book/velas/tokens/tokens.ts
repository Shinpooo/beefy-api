import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const VLX = {
  name: 'Wrapped Velas',
  address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
  symbol: 'WETH',
  decimals: 18,
  chainId: 106,
  website: 'https://weth.io/',
  description: 'Ether or ETH is the native currency built on the Ethereum blockchain.',
  logoURI: 'https://arbiscan.io/token/images/weth_28.png',
} as const;

const _tokens = {
  VLX,
  WVLX: VLX,
  WNATIVE: VLX,
  BUSD: {
    name: 'Binance USD',
    symbol: 'BUSD',
    address: '0xc111c29A988AE0C0087D97b33C6E6766808A3BD3',
    chainId: 106,
    decimals: 18,
    website: 'https://www.beefy.finance/',
    description:
      'Beefy Finance is a Decentralized, Multi-Chain Yield Optimizer platform that allows its users to earn compound interest on their crypto holdings.',
    logoURI:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png',
  },
  WAG: {
    name: 'Wagyuswap',
    symbol: 'WAG',
    address: '0xaBf26902Fd7B624e0db40D31171eA9ddDf078351',
    chainId: 106,
    decimals: 18,
    logoURI:
      'https://pancakeswap.finance/images/tokens/0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d.svg',
    website: 'https://near.org/',
    description:
      'Through simple, secure, and scalable technology, NEAR empowers millions to invent and explore new experiences. Business, creativity, and community are being reimagined for a more sustainable and inclusive future.',
  },
} as const;

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;

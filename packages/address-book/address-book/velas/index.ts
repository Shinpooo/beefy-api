import { beefyfinance } from './platforms/beefyfinance';
import { wagyuswap } from './platforms/wagyuswap';
// import { solace } from './platforms/solace';
import { tokens } from './tokens/tokens';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import Chain from '../../types/chain';
import { ConstInterface } from '../../types/const';

const _velas = {
  platforms: {
    beefyfinance,
    wagyuswap,
    // solace,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
} as const;

export const velas: ConstInterface<typeof _velas, Chain> = _velas;

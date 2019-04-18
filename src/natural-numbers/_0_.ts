// λfx. x
import { NUMBER } from './number';

export const _0_: NUMBER = f => x => x;
export const ZERO = _0_;
_0_.toString = () => '0 function';
ZERO.toString = () => '0 function';

export const ZERO_TIMES = f => x => x;
ZERO_TIMES.toString = () => '0 untyped function';

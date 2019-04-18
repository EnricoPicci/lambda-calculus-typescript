// λfx. f x
import { NUMBER } from './number';

export const _1_: NUMBER = f => x => f(x);
export const ONE = _1_;
_1_.toString = () => '1 function';
ONE.toString = () => '1 function';

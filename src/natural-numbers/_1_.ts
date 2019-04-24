// λfx. f x
import { uF } from '../lambda';
import { NUMBER } from './number';

export const _1_: NUMBER = (f: uF) => x => f(x);
export const ONE = _1_;
_1_.toString = () => '1 function';
ONE.toString = () => '1 function';

export const ONCE = f => x => f(x);
ONCE.toString = () => '1 untyped function aka ONCE, i.e. function f applied ONCE to argument x';

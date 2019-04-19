// λfx. f (f x)
import { NUMBER } from './number';

export const _2_: NUMBER = f => x => f(f(x));
export const TWO = _2_;
_2_.toString = () => '2 function';
TWO.toString = () => '2 function';

export const TWICE = f => x => f(f(x));
TWICE.toString = () => '2 untyped function aka TWICE, i.e. function f applied TWICE to argument x';

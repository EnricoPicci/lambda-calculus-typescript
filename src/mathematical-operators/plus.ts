// λmnfx. n f (m f x)

export const PLUS = m => n => f => x => n(f)(m(f)(x));
PLUS.toString = () => 'PLUS function';

import { NUMBER } from '../natural-numbers/number';
export const PLUS_t = (m: NUMBER) => (n: NUMBER) => (f => x => n(f)(m(f)(x))) as NUMBER;
PLUS_t.toString = () => 'PLUS typed function';

// λmnfx. n f (m f x)

export const ADD = m => n => f => x => n(f)(m(f)(x));
ADD.toString = () => 'ADD function';

import { NUMBER } from '../natural-numbers/number';
export const ADD_t = (m: NUMBER) => (n: NUMBER) => (f => x => n(f)(m(f)(x))) as NUMBER;
ADD_t.toString = () => 'ADD typed function';

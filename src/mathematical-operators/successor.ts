// λnfx. f (n f x)
// λ n . λ z s . s (n z s)

export const SUCCESSOR = n => f => x => f(n(f)(x));
export const SUCCESSOR_ = n => z => s => s(n(z)(s));
SUCCESSOR.toString = () => 'Successor function';
SUCCESSOR_.toString = () => 'Successor function';

import { NUMBER } from '../natural-numbers/number';

export const SUCCESSOR_t = (n: NUMBER) => (f => x => f(n(f)(x))) as NUMBER;
SUCCESSOR.toString = () => 'SUCCESSOR typed function';

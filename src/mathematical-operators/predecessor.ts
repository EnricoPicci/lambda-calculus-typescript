// for all n > 0, calculate n-1; for zero, return zero
// λnfx. n (λgh. h (g f)) (λu. x) (λu. u)

export const PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
PREDECESSOR.toString = () => 'PREDECESSOR function';

import { NUMBER } from '../natural-numbers/number';
import { λ } from '../lambda';
export const PREDECESSOR_t = (n: NUMBER) => ((f: λ) => x => n((g: λ) => (h: λ) => h(g(f)))(u => x)(u => u)) as NUMBER;
PREDECESSOR_t.toString = () => 'PREDECESSOR typed function';
export const PRED = PREDECESSOR_t;

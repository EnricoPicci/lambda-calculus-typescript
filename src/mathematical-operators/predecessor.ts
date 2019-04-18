// λnfx. n (λgh. h (g f)) (λu. x) (λu. u)

export const PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
PREDECESSOR.toString = () => 'PREDECESSOR function';

import { NUMBER } from '../natural-numbers/number';
export const PREDECESSOR_t = (n: NUMBER) => (f => x => n(g => h => h(g(f)))(u => x)(u => u)) as NUMBER;
PREDECESSOR_t.toString = () => 'PREDECESSOR typed function';

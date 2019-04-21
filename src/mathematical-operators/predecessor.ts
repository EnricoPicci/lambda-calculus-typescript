// for all n > 0, calculate n-1; for zero, return zero
// λnfx. n (λgh. h (g f)) (λu. x) (λu. u)
//
// One way to look at Predecessor starts with the PHI function
// The PHI function takes a pair of 2 numbers (n, m) and returns a pair (m, m+1)
// So we have that
// PHI(0, 0) -> (0, 1)
// PHI(PHI(0, 0)) -> (1,2)
// PHI(PHI(PHI(0, 0))) -> (2,3)
// n applications of PHI to (0, 0) returns (n-1, n)
// So the Predecessor of n is
// λn. FIRST(n PHI (PAIR ZERO ZERO))

import { FIRST } from '../pair-list/first-head-car';
import { PHI } from '../pair-list/phi';
import { PAIR } from '../pair-list/pair-vario';
import { ZERO } from '../natural-numbers/_0_';
// export const PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
export const PREDECESSOR = n => FIRST(n(PHI)(PAIR(ZERO)(ZERO)));
PREDECESSOR.toString = () => 'PREDECESSOR function';

import { FIRST_t } from '../pair-list/first-head-car';
import { NUMBER } from '../natural-numbers/number';
import { PHI_t } from '../pair-list/phi';
import { PAIR_t } from '../pair-list/pair-vario';
// import { λ } from '../lambda';
// export const PREDECESSOR_t = (n: NUMBER) => ((f: λ) => x => n((g: λ) => (h: λ) => h(g(f)))(u => x)(u => u)) as NUMBER;
export const PREDECESSOR_t = (n: NUMBER) => FIRST_t<NUMBER>(n(PHI_t)(PAIR_t(ZERO)(ZERO)));
PREDECESSOR_t.toString = () => 'PREDECESSOR typed function';
export const PRED = PREDECESSOR_t;

// ϕ Φ
// Take a pair p containing n and m. Create a new pair whose first element is n and the second
// element is n + 1
//
// This is the building block to be used to create the PREDECESSOR function
//
// ϕ = PHI = λp.PAIR (SECOND p) (SUCC (SECOND p))

import { PAIR } from './pair-vario';
import { SECOND } from './second-tail-cdr';
import { SUCCESSOR } from '../mathematical-operators/successor';
export const PHI = p => PAIR(SECOND(p))(SUCCESSOR(SECOND(p)));
PHI.toString = () => 'PHI function';

import { PAIR_t } from './pair-vario';
import { PAIR_TYPE } from './pair-vario';
import { SECOND_t } from './second-tail-cdr';
import { SUCCESSOR_t } from '../mathematical-operators/successor';
import { NUMBER } from '../natural-numbers/number';
// export function PHI_t(p: PAIR_TYPE<NUMBER>) {return PAIR_t<NUMBER>(SECOND_t<NUMBER>(p))(SUCCESSOR_t(SECOND_t<NUMBER>(p)))};
export const PHI_t = (p: PAIR_TYPE<NUMBER>) => PAIR_t<NUMBER>(SECOND_t<NUMBER>(p))(SUCCESSOR_t(SECOND_t<NUMBER>(p)));
PHI_t.toString = () => 'PHI typed function';
export const ϕ = PHI_t;

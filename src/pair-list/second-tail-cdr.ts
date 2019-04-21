// SECOND = λp. p FALSE

import { F } from '../bolean-logic/false';

export const SECOND = p => p(F);
SECOND.toString = () => 'SECOND function';

import { PAIR_TYPE } from './pair-vario';
export function SECOND_t<TT>(p: PAIR_TYPE<TT>) {
    return p(F);
}
// export function SECOND_t(p: PAIR_TYPE) {return p(F)};
SECOND_t.toString = () => 'SECOND typed function';
export const TAIL = SECOND_t;
export const CAR = SECOND_t;

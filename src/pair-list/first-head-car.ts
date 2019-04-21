// FIRST = λp. p TRUE

import { PAIR_TYPE } from './pair-vario';
import { T } from '../bolean-logic/true';

export const FIRST = p => p(T);
FIRST.toString = () => 'FIRST function';

export function FIRST_t<TT>(p: PAIR_TYPE<TT>): TT {
    return p(T);
}
FIRST_t.toString = () => 'FIRST typed function';
export const HEAD = FIRST_t;
export const CAR = FIRST_t;

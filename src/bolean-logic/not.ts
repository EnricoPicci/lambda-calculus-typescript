// The NOT function
// lambda: NOT := λp.pFT where T and F are the TRUE and FALSE function and p is either T or F
//
// This implementation implements intentional equality of NOT(F) and T as well as NOT(T) and F
// which means that NOT(F) and T are exactly the same function - similarly NOT(T) and F
// This is not the case for the implementation of NOT obtained via flip-cardinal operator (see not_.ts)

import { T } from './true';
import { F } from './false';

export const NOT = p => p(F)(T);
NOT.toString = () => 'Not function';

// The FALSE function
// consider this
// x ? a : b
// if x is false you select a, i.e. the second of the options
//
// lambda:  FALSE := λab.b   this is the KI function
// FALSE is a function to which you pass 2 parameters and it selects the second
import { KI } from '../combinators/second-kite';

export const F = KI;
F.toString = () => 'False function';

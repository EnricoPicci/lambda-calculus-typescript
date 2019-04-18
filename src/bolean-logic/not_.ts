// The NOT function
// lambda: NOT = C := λfab.fba
//
// This implementation implements extensional equality of NOT(F) and T as well as NOT(T) and F
// which means that NOT(F) and T are 2 different functions which behave the same for every input
// so from their behavior standpoint they are indistinguable - similarly NOT(T) and F
// This is not the case for the implementation of NOT implemented as  λfab.fba (see not.ts)
//

import { C } from '../combinators/flip-reverse-argument-cardinal';

export const NOT_ = C;
NOT_.toString = () => 'NOT function with flip combinator';

// λn. n (λx. FALSE) TRUE
//
// Explantion see pages.cs.wisc.edu/~horwitz/CS704-NOTES/2.LAMBDA-CALCULUS-PART2.html#method2
// We want iszero applied to (the representation of) zero to evaluate to true, and applied to anything
// other than zero to evaluate to false. Note that ZERO is a function of two arguments;
// ISZERO needs to "get rid" of that function by applying it to the appropriate two values so that the result is TRUE;
// i.e., we want ISZERO to be of the form:
// λf.f _ _
// What should the missing values be? Well, ZERO is the function that returns its second argument,
// and we want ISZERO applied to ZERO to evaluate to TRUE, so the second argument better be TRUE. \
// The numbers other than ZERO are functions that apply their first argument to the second argument some number of times,
// and for all of those numbers we want the final result to be FALSE.
// So the first argument needs to be a lambda term g such that g applied to TRUE is FALSE;
// g applied to (g applied to TRUE) is FALSE, etc. The answer is actually very simple:
// make g be the function that ignores its argument and returns FALSE:
// g == λx.FALSE
// And now we know that ISZERO should be defined like this:
// λf.f(λx.FALSE)TRUE

import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';
export const ISZERO = n => n(x => F)(T);
ISZERO.toString = () => 'ISZERO function';

// The OR function
// lambda: OR := λpq. p p q
// explanation
// p and q are boolean (see functions T and F), so are binary functions, i.e. they expect 2 parameters
// so ppq is the application of p to p and q
// if p is True, than it selects the first parameter, i.e. p which is True, and this is consistent with the fact
// that if p is True the result of OR is true
// if p is False, than it selects the second argument, i.e. q and so if q is True it returns True
// and if q is false it returns False, again coherently with what is expected from OR
//

export const OR = p => q => p(p)(q);
OR.toString = () => 'OR function';

import { BOOL } from './boolean';
export const OR_t = (p: BOOL) => (q: BOOL) => p(p)(q) as BOOL;
OR_t.toString = () => 'OR typed function';

// OR := λpq. p p q
// we apply the OR function to the 'x' and 'y' arguments, the evaluation of this function (i.e. its beta reduction) is
// (λpq. p p q)xy -> xxy
// if we apply the 'self-application' combinator (i.e. the Mockingbird) to argument 'x' we have
// Mxy -> xxy
// so the M function is equivalent to OR

import { M } from '../combinators/self-application-mockingbird';
export const OR_m = p => q => M(p)(q);
OR_m.toString = () => 'OR function implemented with Mockingbird';

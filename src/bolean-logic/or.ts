// The OR function
// lambda: OR := λpq.ppq
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

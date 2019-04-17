// The XOR function
// lambda: XOR := λpq.p(NOTp)q
// explanation
// p and q are boolean (see functions T and F), so are binary functions, i.e. they expect 2 parameters
//

import { NOT } from './not';

export const XOR = p => q => p(NOT(q))(q);
XOR.toString = () => 'Xor function';

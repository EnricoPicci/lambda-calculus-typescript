// SUBTRACT m n evaluates to m - n if m > n and to zero otherwise
// λmn. n PREDECESSOR m
//
import { PREDECESSOR } from './predecessor';

export const SUBTRACT = m => n => n(PREDECESSOR)(m);
SUBTRACT.toString = () => 'SUBTRACT function';

import { NUMBER } from '../natural-numbers/number';
export const SUBTRACT_t = (m: NUMBER) => (n: NUMBER) => n(PREDECESSOR)(m) as NUMBER;
SUBTRACT_t.toString = () => 'SUBTRACT typed function';

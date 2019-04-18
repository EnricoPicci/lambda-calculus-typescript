//  λmn. AND (LEQ m n) (LEQ n m)
//
import { AND } from '../bolean-logic/and';
import { LEQ } from './leq';

export const EQUAL = m => n => AND(LEQ(m)(n))(LEQ(n)(m));
EQUAL.toString = () => 'EQUAL function';

import { NUMBER } from '../natural-numbers/number';
import { BOOL } from '../bolean-logic/boolean';
export const EQUAL_t = (m: NUMBER) => (n: NUMBER) => AND(LEQ(m)(n))(LEQ(n)(m)) as BOOL;
EQUAL_t.toString = () => 'EQUAL typed function';

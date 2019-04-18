// Less than or equal
// λmn. ISZERO (SUB m n)
//
import { ISZERO } from './is-zero';
import { SUBTRACT } from '../mathematical-operators/subtract';

export const LEQ = m => n => ISZERO(SUBTRACT(m)(n));
LEQ.toString = () => 'LEQ function';

import { NUMBER } from '../natural-numbers/number';
import { BOOL } from '../bolean-logic/boolean';
export const LEQ_t = (m: NUMBER) => (n: NUMBER) => ISZERO(SUBTRACT(m)(n)) as BOOL;
LEQ_t.toString = () => 'LEQ typed function';

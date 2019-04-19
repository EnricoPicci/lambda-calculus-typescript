// λmnfx. n f (m f x)
//
export const ADD = m => n => f => x => n(f)(m(f)(x));
ADD.toString = () => 'ADD function';

// Addition two Church numerals, e.g. 3 and 5, can be seen as applying 3 times the successor of 5
// So, the Add function can be seen as
// λmn. m SUCC n
import { NUMBER } from '../natural-numbers/number';
import { SUCCESSOR_t } from './successor';
export const ADD_t = (m: NUMBER) => (n: NUMBER) => m(SUCCESSOR_t)(n) as NUMBER;
ADD_t.toString = () => 'ADD typed function';

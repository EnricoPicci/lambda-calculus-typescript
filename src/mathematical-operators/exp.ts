// Exponential of a to b is just applying b to a
// λab. b a
//
// It is interesting to see the estethic similarity between the Church numeral ONE and the exponential
// ONE = f => x => f(x)
// EXP = a => b => b(a)

export const EXP = a => b => b(a);
EXP.toString = () => 'EXP function';

import { NUMBER } from '../natural-numbers/number';
export const EXP_t = (a: NUMBER) => (b: NUMBER) => b(a) as NUMBER;
EXP_t.toString = () => 'EXP typed function';

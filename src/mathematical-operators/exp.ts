// λab. b a

export const EXP = a => b => b(a);
EXP.toString = () => 'EXP function';

import { NUMBER } from '../natural-numbers/number';
export const EXP_t = (a: NUMBER) => (b: NUMBER) => b(a) as NUMBER;
EXP_t.toString = () => 'EXP typed function';

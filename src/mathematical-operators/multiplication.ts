// Multiplication of n and m is applying m times f to an argument, and then applying n times f to that result
// MULT = λnmf. n (m f)

// λnmf. n (m f) can be seen as composing n and m and than passing f to the composistion result, i.e.
// MULT = λnmf. (Bnm) f
// so I can simplify removing f
// MULT = λnm. Bnm
// but now we have nm at the end of both sides of the λ, so we can simplify and remove them
// MULT = B
// multiplication is just composition

import { B } from '../combinators/function-composition-bluebird';
export const MULT = B;
MULT.toString = () => 'MULT function';

import { uF } from '../lambda';
import { NUMBER } from '../natural-numbers/number';
export const MULT_t = (n: NUMBER) => (m: NUMBER) => ((f: uF) => n(m(f))) as NUMBER;
MULT_t.toString = () => 'MULT typed function';

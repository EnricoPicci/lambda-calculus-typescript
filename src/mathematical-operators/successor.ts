// A number n in Church numerals is a function applied n times to an argument
// So
// 1 is f => x => f(x)
// 2 is f => x => f(f(x)) and is also the successor of 1
// 3 is f => x => f(f(f(x)))  and is also the successor of 2
//
// In Church numerals a number N is a function that, if applied to arguments f and x, returns n times
// the application of f to x
// So, if n is 3, "n f x" is f(f(f(x))), thre times the application of f to x
// So, in the end, the Successor of n is an additional applifation of f to n
// λnfx. f (n f x)
// where n is a Church numeral, f is the function used to build the Church numeral and x is the argument applied
// to that function

export const SUCCESSOR = n => f => x => f(n(f)(x));
SUCCESSOR.toString = () => 'Successor function';

import { NUMBER } from '../natural-numbers/number';

export const SUCCESSOR_t = (n: NUMBER) => (f => x => f(n(f)(x))) as NUMBER;
SUCCESSOR.toString = () => 'SUCCESSOR typed function';

// If the Successor is this λnfx. f (n f x), it can be also seen as the application of f to nf, i.e.
// λnf.Bf(nf)
// where n is a Church numeral, f is the function used to build the Church numeral
import { B } from '../combinators/function-composition-bluebird';
export const SUCCESSOR_B = n => f => B(f)(n(f));
SUCCESSOR.toString = () => 'Successor function using B combinator';

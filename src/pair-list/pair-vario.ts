// A pair is a couple of arguments followed by a function
// PAIR := λxyf. f x y
// Give the PAIR function 2 arguments, x and y, and you get a box that is holding such arguments
// you can move arounf this box
// when you need to use these arguments, just pass to the box the function you want to apply to such arguments
//
export const PAIR = x => y => f => f(x)(y);
PAIR.toString = () => 'PAIR function';

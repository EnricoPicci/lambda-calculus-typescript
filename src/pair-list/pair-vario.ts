// A pair is a couple of arguments followed by a function
// PAIR := λxyf. f x y
// Give the PAIR function 2 arguments, x and y, and you get a box that is holding such arguments
// you can move around this box
// when you need to use these arguments, just pass to the box the function you want to apply to such arguments
//

import { λ } from '../lambda';

export const PAIR = x => y => (f: λ) => f(x)(y);
PAIR.toString = () => 'PAIR function';

// we need to use named function and not fat arrow anonymous function to pass the type
export function PAIR_t<T>(x: T) {
    return function(y: T): PAIR_TYPE<T> {
        return (f: λ) => f(x)(y);
    };
}
// export type PAIR_TYPE = (f: λ) => any;
export type PAIR_TYPE<T> = (f: (x: T) => any) => any;

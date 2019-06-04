// This example tries to explain why the Y combinator is Javascript / Typescript diverges
// The reason is linked to the fact that Typescript / Javascript does not apply a lazy evaluation strategy
// rather it applies an eager/strict one
// see https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38

// We use the Factorial calculation as example

// The Y combinator definition
// λg. (λx. g (x x)) (λx. g (x x))

// Here is the Typescript implementation of Y using anonymous functions
// const Y = g => (x => g(x(x)))(x => g(x(x)));
//
// This is the Y combinator expressed in terms of Typescript functions and not anonymous 'fat arrow' functions
// With this version it is easier to follow the flow of execution

// Y(g) body declares 2 functions, innerYfuntion1 and innerYfuntion2 and then returns the result of the execution of
// innerYfuntion1(innerYfuntion2)
//
// Let's consider when a parameter is passed to Y(g), i.e. - as we said, this is the line of code that gets executed
// innerYfuntion1(innerYfuntion2)
// innerYfuntion2 represents the input variable x of innerYfuntion1
// the fist thing that innerYfuntion1 does is to execute
// const xx = x(x);
// which means to call innerYfuntion2 passing itself as parameter, in other words
// x(x) is actually
// innerYfuntion2(innerYfuntion2)
// now we enter in the execution logic of innerYfuntion2
// the first thing that gets executed in innerYfuntion2 is
// const xxx = x(x);
// which means that we have to execute x(x) where x is innerYfuntion2
// so we have again to execute
// innerYfuntion2(innerYfuntion2)
// which, as we already saw, leads again to the need to evaluate
// innerYfuntion2(innerYfuntion2)
// and so we enter the infinite loop that brings to the exaustion of the stack
function Y(g) {
    function innerYfuntion1(x) {
        console.log('first line of execution of innerYfuntion - executed only once');
        const xx = x(x);
        console.log('I think you never see this line printed since I am never executed');
        return g(xx);
    }
    function innerYfuntion2(x) {
        // The following line is the key of the divergence as explained above
        // console.log('If you uncomment me you will see me printed many times until Maximum call stack size is exceeded');
        const xxx = x(x);

        console.log('I think you never see this line printed since I am never executed');
        return g(xxx);
    }
    return innerYfuntion1(innerYfuntion2);
}
Y.toString = () => 'Y fixed-point combinator';

// THE TEST

import { expect } from 'chai';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { SUCC } from '../mathematical-operators/successor';
import { EQ } from '../numeric-comparison-operators/equal';
import { PRED } from '../mathematical-operators/predecessor';
import { MULT } from '../mathematical-operators/multiplication';

describe('Y fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it(`Y used to calculate Factorial diverges since Typescript applies an eager/strict evaluation strategy
        see https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38`, () => {
        const five = SUCC(SUCC(SUCC(SUCC(SUCC(ZERO)))));
        five['lambda name'] = 'I am five';

        // F = λf.λx. if x==0 then 1 else x*f(x-1)
        // The following would be the lambda to be passed to Y for recursion
        // const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);

        // we rather use an expanded version to make the example easier to follow

        // If we use the following version of F to debug step by step the exectuion we see that the
        // 'body' of the function is never entered
        const F = f => x => {
            console.log('this never gets printed since it is never executed');
            return EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        };
        F['lambda name'] = 'I am F';

        let error;
        try {
            Y(F)(five);
        } catch (e) {
            error = e;
        } finally {
            expect(error.message).to.be.equal('Maximum call stack size exceeded');
        }
    });
});

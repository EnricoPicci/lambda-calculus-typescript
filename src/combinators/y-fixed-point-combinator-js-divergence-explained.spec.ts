// This example tries to explain why the Y combinator is Javascript / Typescript diverges
// The reason is linked to the fact that Typescript / Javascript does not apply a lazy evaluation strategy
// rather it applies an eager/string one
// see https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38

// We use the Factorial calculation as example

// The Y combinator definition
// λg. (λx. g (x x)) (λx. g (x x))

// This is the Y combinator expressed in terms of Typescript functions and not anonymous 'fat arrow' functions
// With this version it is easier to follow the flow of execution
function Y(g) {
    function innerYfuntion(x) {
        console.log('first ling of execution of innerYfuntion - executed only once');
        const xx = x(x);
        console.log('I think you never see this line printed since I am never executed');
        return g(xx);
    }
    function fx(x) {
        // The following line is the key of the divergence - the value of variable 'x' is 'fx', i.e. the function
        // itself we are in now - so 'x(x)' is 'fx(fx)' which calls 'fx' with 'fx' as argument 'x' which
        // leads to evaluating again 'x(x)' and so on and so for

        // console.log('If you uncomment me you will see me printed many times until Maximum call stack size is exceeded');
        const xxx = x(x);

        console.log('I think you never see this line printed since I am never executed');
        return g(xxx);
    }
    return innerYfuntion(fx);
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

        let errorEncoutered = false;
        try {
            Y(F)(five);
        } catch (e) {
            expect(e).to.be.not.undefined;
            errorEncoutered = true;
        } finally {
            expect(errorEncoutered).to.be.true;
        }
    });
});

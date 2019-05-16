import { expect } from 'chai';
import { Z } from './z-fixed-point-combinator';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { SUCC } from '../mathematical-operators/successor';
import { EQ } from '../numeric-comparison-operators/equal';
import { PRED } from '../mathematical-operators/predecessor';
import { MULT } from '../mathematical-operators/multiplication';

describe('Z fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Z used to calculate Factorial', () => {
        const z = 0;
        const ff = x => x + 1;
        const five = SUCC(SUCC(SUCC(SUCC(SUCC(ZERO)))));
        // F = λf.λx. if x==0 then 1 else x*f(x-1)

        // CONVERGING VERSION
        // this version of the F function converges since the exit condition "EQ(x)(ONE)" is applied to 2 functions
        // if the exit condition is true, i.e. if x is equal to ONE, than "t => ONE" is returned, otherwise
        // "t => MULT(t)(f(PRED(t)))" is returned
        // In both cases the exit condition "EQ(x)(ONE)" returns a function which itself is applied to x
        // If the exit condition returns true, that we apply "t => ONE" to x, which returns always ONE
        // If the exit condition is false, than we apply "t => MULT(t)(f(PRED(t)))" to x, which starts again the
        // recursion
        const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);

        // DIVERGING VERSION
        // the following version diverges (i.e. enters an infinite loop)
        // const F = f => x => EQ(x)(ONE)(ONE)(MULT(x)(f(PRED(x))));
        // the reason is that in Typescript "MULT(x)(f(PRED(x)))" is evaluated regardless of the result of  "EQ(x)(ONE)"
        // so, even if "EQ(x)(ONE)" returns true, Typescript wants to know the result of "MULT(x)(f(PRED(x)))"
        // would be, but this implies to apply again function f to "(PRED(x)"
        // If we start with x equal to five, as in this example, we gradually decrement x by one at each step of the
        // recursion
        // So, when x reached the value of one, we have that "EQ(x)(ONE)" returns TRUE, i.e. returns a function
        // which chooses the first of the 2 arguments passed to it, in our case it chooses "ONE" since our formula is
        // EQ(x)(ONE) (ONE) (MULT(x)(f(PRED(x))))
        // before executing this logic though, Typescript wants to calculate also the other option, i.e. it wants to
        // evaluate "MULT(x)(f(PRED(x)))", which means to evaluate "f(PRED(x))", i.e. f(ZERO), since x is ONE and
        // therefore "PRED(x)" is ZERO
        // This means that now we have to evaluate function f, i.e. "x => EQ(x)(ONE)(ONE)(MULT(t)(f(PRED(t))))",
        // with x = ZERO, which means that "EQ(x)(ONE)" is false, and therefore "MULT(t)(f(PRED(t)))" is selected,
        // which again means to evaluate function f and so on and so for

        // We can use the following version of F to debug step by step the exectuion
        // const F = f => x => {
        //     console.log('x', x(ff)(z));
        //     console.log('x eq one', EQ(x)(ONE));
        //     console.log('x eq one result', EQ(x)(ONE)('ONE')('f(PRED(x))'));
        //     // the above log shows that EQ(x)(ONE)('ONE') is correctly evaluated when x is equal to ONE
        //     // at the same time, looking at the following line, we can see that "f(PRED(t))" gets evaluated
        //     // anyways, which causes the the computation to diverge
        //     return EQ(x)(ONE)(ONE)(MULT(x)(f(PRED(x))));
        // };
        const factorial = Z(F)(five);
        expect(factorial(ff)(z)).to.equal(120);
    });
});

describe('tests to explain Z fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    // http://pages.cs.wisc.edu/~horwitz/CS704-NOTES/2.LAMBDA-CALCULUS-PART2.html#rec

    it('Factorial using javascript recursive function definition', () => {
        const fact = x => (x === 0 ? 1 : x * fact(x - 1));
        // const fact = x => {
        //     if (x === 0) {
        //         return 1;
        //     }
        //     return x * fact(x - 1);
        // };
        expect(fact(0)).to.equal(1);
        expect(fact(5)).to.equal(120);
    });
});

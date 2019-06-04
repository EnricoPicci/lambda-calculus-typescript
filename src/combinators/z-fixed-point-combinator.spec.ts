import { expect } from 'chai';
import { Z } from './z-fixed-point-combinator';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { SUCC } from '../mathematical-operators/successor';
import { EQ } from '../numeric-comparison-operators/equal';
import { PRED } from '../mathematical-operators/predecessor';
import { MULT } from '../mathematical-operators/multiplication';

describe('1 - Z fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('1.1 - Z used to calculate Factorial using pure lambda calculus', () => {
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

        const z = 0;
        const ff = x => x + 1;
        expect(factorial(ff)(z)).to.equal(120);
    });
});

describe('2 - Z fixed-point combinator used for recursion using standard Javascript for recursion logic', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it(`2.1 - Z used to calculate Factorial using standard Javascript for recursion logic
    Here we can apply directly the logic of Factorial as it is and we are not forced ro return functions
    in order to converge and avoid infinite loop as we had to do when using pure lambda calculus,
    see example 1.1`, () => {
        // const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        // const F = f => x => x === 1 ? t => 1 : (t => t * f(t - 1))(x);
        const F = f => x => {
            if (x === 1) {
                return 1;
            } else {
                return x * f(x - 1);
            }
        };

        const factorial = Z(F)(5);
        expect(factorial).to.equal(120);
    });

    it(`2.2 - Z used to calculate Factorial using standard Javascript for recursion logic
    Same as test 2.1 just using fat arrow functions`, () => {
        // const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        const F = f => x => (x === 1 ? 1 : x * f(x - 1));

        const factorial = Z(F)(5);
        expect(factorial).to.equal(120);
    });

    it(`2.3 - Z used to calculate Factorial using standard Javascript for recursion logic
    The inner logic returns a function which is then evaluated with x - this mirrors the logic that allow
    Factorial to converge when we use a purely lambda calculus logic - see the example 1.1`, () => {
        // const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        // const F = f => x => x === 1 ? t => 1 : (t => t * f(t - 1))(x);
        const F = f => x => {
            if (x === 1) {
                return (t => 1)(x);
            } else {
                return (t => t * f(t - 1))(x);
            }
        };

        const factorial = Z(F)(5);
        expect(factorial).to.equal(120);
    });

    it(`2.4 - Z used to calculate Factorial using standard Javascript for recursion logic
    Same as test 2.3 just using fat arrow functions`, () => {
        // const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        // const F = f => x => x === 1 ? t => 1 : (t => t * f(t - 1))(x);
        const F = f => x => (x === 1 ? (t => 1)(x) : (t => t * f(t - 1))(x));

        const factorial = Z(F)(5);
        expect(factorial).to.equal(120);
    });

    it(`2.6 - Z used to calculate Factorial using standard Javascript for recursion logic
    Same as test 2.2 just removing the use of any variable to store intermediate function definitions`, () => {
        // const F = f => x => (x === 1 ? 1 : x * f(x - 1));
        // const factorial = Z(F)(5);

        const factorial = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))))(f => x => (x === 1 ? 1 : x * f(x - 1)))(
            5,
        );
        expect(factorial).to.equal(120);
    });
});

describe('3 - Z combinator using regular functions and not fat arrow functions', () => {
    beforeEach(() => {});

    afterEach(() => {});

    // http://pages.cs.wisc.edu/~horwitz/CS704-NOTES/2.LAMBDA-CALCULUS-PART2.html#rec

    it('3.1 - Factorial using javascript recursive function definition', () => {
        // const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));
        const Zfunction = f => {
            const z1 = x => {
                const z11 = v => {
                    return x(x)(v);
                };
                return f(z11);
            };
            const z2 = x => {
                const z22 = v => {
                    return x(x)(v);
                };
                return f(z22);
            };
            return z1(z2);
        };

        const F = f => x => {
            if (x === 1) {
                return 1;
            } else {
                return x * f(x - 1);
            }
        };

        const factorial = Zfunction(F)(5);
        expect(factorial).to.equal(120);
    });
});

describe('4 - tests how recursion can work in standard javascript', () => {
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

describe('5 - tests Fibonacci recursion', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('5.1 - Fibonacci using javascript named functions', () => {
        const fibonacci = x => (x < 2 ? 1 : fibonacci(x - 2) + fibonacci(x - 1));
        expect(fibonacci(0)).to.equal(1);
        expect(fibonacci(1)).to.equal(1);
        expect(fibonacci(7)).to.equal(21);
    });

    it('5.2 - Fibonacci using Z combinator', () => {
        const F = f => x => (x < 2 ? 1 : f(x - 2) + f(x - 1));
        const fibonacci = Z(F);
        expect(fibonacci(0)).to.equal(1);
        expect(fibonacci(1)).to.equal(1);
        expect(fibonacci(7)).to.equal(21);
    });
});

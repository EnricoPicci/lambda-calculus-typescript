import { expect } from 'chai';
import { Y } from './y-fixed-point-combinator';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { SUCC } from '../mathematical-operators/successor';
import { EQ } from '../numeric-comparison-operators/equal';
import { PRED } from '../mathematical-operators/predecessor';
import { MULT } from '../mathematical-operators/multiplication';

describe('1 - Y fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it(`Y used to calculate Factorial diverges since Typescript applies an eager/strict evaluation strategy
        see https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38
        see also the y-fixed-point-combinator-js-divergence-explained.spec.ts example for other details`, () => {
        const five = SUCC(SUCC(SUCC(SUCC(SUCC(ZERO)))));

        // F = λf.λx. if x==0 then 1 else x*f(x-1)
        const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);

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

describe('2 - Y fixed-point combinator with Typescript recursion logic', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it(`2.1 - Y used to calculate Factorial diverges since Typescript applies an eager/strict evaluation strategy
        see https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38
        see also the y-fixed-point-combinator-js-divergence-explained.spec.ts example for other details
        Here we use Typescript logic and do not relay on pure Lambda Calculus formats`, () => {
        const F = f => x => (x === 0 ? 1 : x * f(x - 1));

        try {
            Y(F)(5);
        } catch (e) {
            expect(e.message).to.be.equal('Maximum call stack size exceeded');
        }
    });
});

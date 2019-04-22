import { expect } from 'chai';
import { Y } from './y-fixed-point-combinator';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { SUCC } from '../mathematical-operators/successor';
import { EQ } from '../numeric-comparison-operators/equal';
import { PRED } from '../mathematical-operators/predecessor';
import { MULT } from '../mathematical-operators/multiplication';

describe('Y fixed-point combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it(`Y used to calculate Factorial diverges since Typescript is na eager language
        see this https://youtu.be/3VQ382QG-y4?t=3698 at time 1:01:38`, () => {
        const five = SUCC(SUCC(SUCC(SUCC(SUCC(ZERO)))));

        // F = λf.λx. if x==0 then 1 else x*f(x-1)
        const F = f => x => EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);

        // We can use the following version of F to debug step by step the exectuion
        // const F = f => x => {
        //     console.log('x', x(ff)(z));
        //     console.log('x eq one', EQ(x)(ONE));
        //     console.log('x eq one result', EQ(x)(ONE)('ONE')('f(PRED(x))'));
        //     // the bove log shows that EQ(x)(ONE)('ONE') is correctly evaluated when x is equal to ONE
        //     // at the same time, looking at the following line, we can see that "f(PRED(t))" gets evaluated
        //     // anyways, which causes the the computation to diverge
        //     return EQ(x)(ONE)(t => ONE)(t => MULT(t)(f(PRED(t))))(x);
        // };

        let errorEncoutered = false;
        try {
            //
            Y(F)(five);
        } catch (e) {
            expect(e).to.be.not.undefined;
            errorEncoutered = true;
        } finally {
            expect(errorEncoutered).to.be.true;
        }
    });
});

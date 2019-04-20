import { expect } from 'chai';
import { NUMBER } from '../src/natural-numbers/number';
import { ZERO } from '../src/natural-numbers/_0_';
import { TRUE } from '../src/bolean-logic/true';
import { FALSE } from '../src/bolean-logic/false';
import { SUCC } from '../src/mathematical-operators/successor';
import { λ } from '../src/lambda';
import { BOOL } from '../src/bolean-logic/boolean';
import { AND } from '../src/bolean-logic/and';

describe('How to compare numbers expressed as Church numerals', () => {
    // Let's get back to our initial problem. We need to understand whether 2 numbers, expressed as lambda functions
    // according to the definition of numbers we have just given (Church numerals), are equal or not.
    //
    // One way to check whether n dn m are equal is to check whether n is lessThanOrEqual to m and m is
    // lessThenOrEqual to n. Assuming we have a function LEQ(m)(n) that returns TRUE if m is lessThanOrEqual n,
    // then we can define the EQ function as
    // EQ = λmn. AND (LEQ m n) (LEQ n m)
    //
    // Now the point is how to define LEQ.
    // To define LEQ we start assuming that we have a function SUB(m)(n)
    // which returns (m - n) is m is greaterOrEqual to n and ZERO in all other cases.
    // We also assume we have a function ISZERO(n) that returns TRUE if n is ZERO, FALSE otherwise.
    // IF we have such functions, we can define LEQ as
    // LEQ = λmn. ISZERO (SUB m n)
    //
    // We have moved the problem to the definition of SUB and ISZERO.
    //
    // How can we implement ISZERO?
    // It has to be a lambda which expects a single argument in the form of a Church numeral, so something like
    // ISZERO = λn.
    // Since there is nothing else that n, we better do something with it
    // n is a Church numeral, i.e. a binary function of type
    // type NUMBER = (f: λ) => (x: any) => any;
    // Yes, we are switching between lambda calculus notation and Typescript, we are describing the same concept
    // in 2 different formalisms. So
    // ISZERO = n => n(x)(y)
    // and we have to find the right x and y to make sure that it returns TRUE if n is ZERO and FALSE otherwise
    // Let's start with the case of n equal to ZERO, i.e. equal to
    // ZERO = f => x => x  which means that
    // ZERO(x)(y)
    // returns always y. Therefore, y must be TRUE, which means
    // ISZERO = n => n(x)(TRUE)
    // Now let's analyze the case n is ONE. In this case n is
    // ONE = f => x => f(x)
    // For what we have established analyzing the case of n equal to ZERO, we have that
    // ISZERO(ONE) gets translated in
    // ONE(x)(TRUE)
    // which, or the definition of ONE, is equal to
    // x(TRUE)
    // So we see that
    // x(TRUE)
    // has to return FALSE, and this is possible only if x is the following lambda
    // x = a => FALSE
    // The final result is this
    const ISZERO = (n: NUMBER) => n(x => FALSE)(TRUE);
    it('ISZERO applied to ZERO is TRUE', () => {
        expect(ISZERO(ZERO)).to.equal(TRUE);
    });
    const ONE = SUCC(ZERO);
    it('ISZERO applied to ONE is FALSE', () => {
        expect(ISZERO(ONE)).to.equal(FALSE);
    });

    // How can we implement SUB?
    // Again let's assume we have a PRED(n) function which returns the prodecessor of n, if n is greater than ZERO,
    // ZERO otherwise.
    // If we have such PRED function, we can say that 7 - 5 is the result of applying 5 times the PRED function to 7
    // In other words
    // SUB = λmn. n PRED m
    //
    // Now, with a leap of faith, let's accept the following definition of PRED
    // λnfx. n (λgh. h (g f)) (λu. x) (λu. u)
    const PRED = (n: NUMBER) => ((f: λ) => x => n((g: λ) => (h: λ) => h(g(f)))(u => x)(u => u)) as NUMBER;
    it('ZERO is the PRED of ONE', () => {
        const f: λ = x => x + 1;
        const a = 0;
        const predOne = PRED(ZERO);
        const applyPredOneToArgs = predOne(f)(a);
        const applyZeroToArgs = ZERO(f)(a);
        expect(applyPredOneToArgs).to.equal(applyZeroToArgs);
    });

    // We end up with SUB being
    // SUB = λmn. n PRED m
    const SUB = (m: NUMBER) => (n: NUMBER) => n(PRED)(m) as NUMBER;
    it('ONE minus ONE is ZERO', () => {
        const f: λ = x => x + 1;
        const a = 0;
        const oneMinusOne = SUB(ONE)(ONE);
        const applyOneMinusOneToArgs = oneMinusOne(f)(a);
        const applyZeroToArgs = ZERO(f)(a);
        expect(applyOneMinusOneToArgs).to.equal(applyZeroToArgs);
    });
    it('ONE minus ZERO is ONE', () => {
        const f: λ = x => x + 1;
        const a = 0;
        const oneMinusOne = SUB(ONE)(ZERO);
        const applyOneMinusZeroToArgs = oneMinusOne(f)(a);
        const applyOneToArgs = ONE(f)(a);
        expect(applyOneMinusZeroToArgs).to.equal(applyOneToArgs);
    });
    // and LEQ being
    // LEQ = λmn. ISZERO (SUB m n)
    const LEQ = (m: NUMBER) => (n: NUMBER) => ISZERO(SUB(m)(n)) as BOOL;
    it('ONE is lessThanOrEqual ONE', () => {
        const oneLeqOne = LEQ(ONE)(ONE);
        expect(oneLeqOne).to.equal(TRUE);
    });
    it('ZERO is lessThanOrEqual ONE', () => {
        const oneLeqOne = LEQ(ZERO)(ONE);
        expect(oneLeqOne).to.equal(TRUE);
    });
    it('ONE is not lessThanOrEqual ZERO', () => {
        const oneLeqOne = LEQ(ONE)(ZERO);
        expect(oneLeqOne).to.equal(FALSE);
    });

    // Now we have everything to implement the EQ function as
    // EQ = λmn. AND (LEQ m n) (LEQ n m)
    const EQ = (m: NUMBER) => (n: NUMBER) => AND(LEQ(m)(n))(LEQ(n)(m)) as BOOL;
    it('ONE is equal to ONE', () => {
        const oneLeqOne = EQ(ONE)(ONE);
        expect(oneLeqOne).to.equal(TRUE);
    });
    it('ZERO is not equal to ONE', () => {
        const oneLeqOne = EQ(ZERO)(ONE);
        expect(oneLeqOne).to.equal(FALSE);
    });
});

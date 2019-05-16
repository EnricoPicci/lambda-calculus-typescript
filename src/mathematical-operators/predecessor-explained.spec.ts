import { expect } from 'chai';
import { SUCCESSOR } from './successor';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

// export const PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);

describe('PREDECESSOR function explained', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('the predecessor of ZERO is ZERO', () => {
        const f = x => x + 1;
        const x = 1;
        let f_passed_to_function_PF;
        let x_passed_to_function_PX;
        let f1;
        let x1;
        let nf1x1;
        function PREDECESSOR(n) {
            return function PF(f) {
                return function PX(x) {
                    f_passed_to_function_PF = f;
                    x_passed_to_function_PX = x;
                    f1 = g => h => h(g(f));
                    x1 = u => x;
                    nf1x1 = n(f1)(x1);
                    return nf1x1(u => u);
                };
            };
        }
        const predecessorOfZero = PREDECESSOR(ZERO);
        const resultWithPredecessorOfZero = predecessorOfZero(f)(x);
        const resultWithZero = ZERO(f)(x);
        // test that the PREDECESSOR function actually works
        expect(resultWithPredecessorOfZero).to.equal(resultWithZero);

        // test the various steps of the elaboration

        // f1 and x1 are actually the values entering the body of the lambda
        expect(f_passed_to_function_PF.name).to.equal(f.name);
        expect(x_passed_to_function_PX).to.equal(x);
        // ZERO does not apply f1 to x1 and returns simply x1
        expect(nf1x1).to.equal(x1);
    });

    it('the predecessor of ONE is ZERO', () => {
        const f = x => x + 1;
        const x = 1;
        let f_passed_to_function_PF;
        let x_passed_to_function_PX;
        let f1;
        let x1;
        let f1x1;
        let nf1x1;
        function PREDECESSOR(n) {
            return function PF(f) {
                return function PX(x) {
                    f_passed_to_function_PF = f;
                    x_passed_to_function_PX = x;
                    f1 = g => h => h(g(f));
                    x1 = u => x;
                    // the PREDECESSOR logic as defined asks us to calculate n(f1)(x1) with the values of f1 and x1 we have set
                    nf1x1 = n(f1)(x1);
                    //
                    // ONE applies f1 once to x1, so it returns f1(x1)
                    // f1(x1) is (g => h => h(g(f)))(u => x)   which simplified by redection returns
                    // h => h((u => x)(f)) which itself, once simplified via reduction, becomes   h => h(x)
                    f1x1 = h => h(x);
                    // the key thing is that f1x1 does not contain any reference to f
                    // applying finally the identity function we get
                    // (h => h(x))(u => u) which simplified becomes   (u => u)(x)  which again can be simplified to x
                    // so in case of ONE, the PREDECESSOR as defined returns whatever x will be applied ignoring the f
                    // so it behaves like ZERO, which is what we want
                    return nf1x1(u => u);
                };
            };
        }
        const predecessorOfOne = PREDECESSOR(ONE);
        const resultWithPredecessorOfOne = predecessorOfOne(f)(x);
        const resultWithZero = ZERO(f)(x);
        // test that the PREDECESSOR function actually works
        expect(resultWithPredecessorOfOne).to.equal(resultWithZero);

        // test the various steps of the elaboration

        // TEST 1 - f1 and x1 are actually the values entering the body of the lambda
        expect(f_passed_to_function_PF.name).to.equal(f.name);
        expect(x_passed_to_function_PX).to.equal(x);
        // TEST 2
        // ONE does apply f1 to x1 once and returns f1(x1)
        // what we need to prove is that with THIS f1 (i.e. the f1 defined in the test, the f1 of the PREDECESSOR function logic)
        // and with THIS x1 (i.e. the x1 defined in the test, the x1 of the PREDECESSOR function logic),
        // calculating f1(x1)(u => u) we obtain
        // the predecessor of ONE, which is ZERO, and ZERO(f)(x) just returns x
        f1x1 = f1(x1)(u => u);
        expect(f1x1).to.equal(x);
    });

    it('the predecessor of TWO is ONE', () => {
        const f = x => x + 1;
        const x = 0;
        let f_passed_to_function_PF;
        let x_passed_to_function_PX;
        let f1;
        let x1;
        let f1f1x1;
        let nf1x1;
        function PREDECESSOR(n) {
            return function PF(f) {
                return function PX(x) {
                    f_passed_to_function_PF = f;
                    x_passed_to_function_PX = x;
                    f1 = g => h => h(g(f));
                    x1 = u => x;
                    // the PREDECESSOR logic as defined asks us to calculate n(f1)(x1) with the values of f1 and x1 we have set
                    nf1x1 = n(f1)(x1);
                    //
                    // TWO applies f1 twice to x1, so it returns f1(f1(x1))
                    // f1(x1) is (g => h => h(g(f)))(u => x)   which simplified by redection returns
                    // h => h((u => x)(f)) which itself, once simplified via reduction, becomes   h => h(x)
                    // so f1(f1(x)) is  f1(h => x)
                    f1f1x1 = f1(h => h(x));
                    // consider that the 'h' found in the definition of f1 IS NOT the same h to which the function passed in as
                    // parameter to f1 refers to - in other words we can name the 'h' in f1 as h1
                    // and therefore expand f1(h => h(x)) as
                    // (g => h1 => h1(g(f)))(h => h(x)) which can be simplified to
                    // h1 => h1((h => h(x)(f))  which again becomes
                    // h1 => h1(f(x))
                    //
                    // Now we remove h1 applying the identity function
                    // (h1 => h1(f(x)))(u => u)   which, simplified, becomes
                    // (u => u)(f(x))   which again can be simplified to
                    // f(x)
                    //
                    // as a result we have obtained f(x) starting from TWO, which is f(f(x))
                    // so we have removed one application of f to x, exactly what PREDECESSOR has to do
                    return nf1x1(u => u);
                };
            };
        }
        const predecessorOfTwo = PREDECESSOR(TWO);
        const resultWithPredecessorOfTwo = predecessorOfTwo(f)(x);
        const resultWithOne = ONE(f)(x);
        // test that the PREDECESSOR function actually works
        expect(resultWithPredecessorOfTwo).to.equal(resultWithOne);

        // test the various steps of the elaboration

        // TEST 1 - f1 and x1 are actually the values entering the body of the lambda
        expect(f_passed_to_function_PF.name).to.equal(f.name);
        expect(x_passed_to_function_PX).to.equal(x);
        // TEST 2
        // TWO does apply f1 to x1 twice and returns f1(f1(x1))
        // what we need to prove is that with THIS f1 (i.e. the f1 defined in the test, the f1 of the PREDECESSOR function logic)
        // and with THIS x1 (i.e. the x1 defined in the test, the x1 of the PREDECESSOR function logic),
        // calculating f1(f1(x1)) we obtain
        // the predecessor of TWO, which is ONE
        expect(f1f1x1(u => u)).to.equal(resultWithOne);
    });
});

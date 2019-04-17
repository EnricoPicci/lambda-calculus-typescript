import { expect } from 'chai';
import { PREDECESSOR } from './predecessor';
import { SUCCESSOR } from './successor';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('PREDECESSOR function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero is the predecessor of One', () => {
        const z = 0;
        const f = x => x + 1;
        const predecessorOfOne = PREDECESSOR(ONE);
        const resultWithPredecessorOfOne = predecessorOfOne(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(resultWithPredecessorOfOne).to.equal(resultWithZero);
    });

    it('One is the predecessor of Two', () => {
        const z = 0;
        const f = x => x + 1;
        const predecessorOfTwo = PREDECESSOR(TWO);
        const resultWithPredecessorOfTwo = predecessorOfTwo(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithPredecessorOfTwo).to.equal(resultWithOne);
    });

    it('The predecessor of the successor of Two is Two', () => {
        const z = 0;
        const f = x => x + 1;
        const successorOfTwo = SUCCESSOR(TWO);
        const predecessorOfSuccessorOfTwo = PREDECESSOR(successorOfTwo);
        const resultWithPredecessorOfSuccessorOfTwo = predecessorOfSuccessorOfTwo(f)(z);
        const resultWithTwo = TWO(f)(z);
        expect(resultWithPredecessorOfSuccessorOfTwo).to.equal(resultWithTwo);
    });

    it('One is the predecessor of Two even with the successor function for even numbers', () => {
        const z = 0;
        const f = x => x + 2;
        const predecessorOfTwo = PREDECESSOR(TWO);
        const resultWithPredecessorOfTwo = predecessorOfTwo(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithPredecessorOfTwo).to.equal(resultWithOne);
    });
});

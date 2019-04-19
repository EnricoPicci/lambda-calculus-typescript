import { expect } from 'chai';
import { SUCCESSOR } from './successor';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';

describe('SUCCESSOR function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('One is the successor of Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const successorOfZero = SUCCESSOR(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it('One is the successor of Zero even with the successor function for even numbers', () => {
        const z = 0;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it(`One is the successor of Zero even with the successor function for even numbers
        and with the origin (zero) set to 3`, () => {
        const z = 3;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });
});

import { SUCCESSOR_t } from './successor';
describe('SUCCESSOR_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('One is the successor of Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const successorOfZero = SUCCESSOR_t(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it('One is the successor of Zero even with the successor function for even numbers', () => {
        const z = 0;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR_t(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it(`One is the successor of Zero even with the successor function for even numbers
        and with the origin (zero) set to 3`, () => {
        const z = 3;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR_t(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });
});

import { SUCCESSOR_B } from './successor';
describe('SUCCESSOR_B function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('One is the successor of Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const successorOfZero = SUCCESSOR_B(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it('One is the successor of Zero even with the successor function for even numbers', () => {
        const z = 0;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR_B(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });

    it(`One is the successor of Zero even with the successor function for even numbers
        and with the origin (zero) set to 3`, () => {
        const z = 3;
        const f = x => x + 2;
        const successorOfZero = SUCCESSOR_B(ZERO);
        const resultWithSuccessorOfZero = successorOfZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(resultWithSuccessorOfZero).to.equal(resultWithOne);
    });
});

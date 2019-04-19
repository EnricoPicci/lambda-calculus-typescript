import { expect } from 'chai';
import { ADD } from './add';
import { SUCCESSOR } from './successor';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('ADD function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero plus Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroPlusZero = ADD(ZERO)(ZERO);
        const result = zeroPlusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One plus Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = ADD(ONE)(ZERO);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero plus One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = ADD(ZERO)(ONE);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('One plus Two is the successor of Two', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusTwo = ADD(ONE)(TWO);
        const result = onePlusTwo(f)(z);
        const successorOfTwo = SUCCESSOR(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });

    it(`One plus Two is the successor of Two even with the successor function for even numbers
        and with the origin (zero) set to 5`, () => {
        const z = 5;
        const f = x => x + 2;
        const onePlusTwo = ADD(ONE)(TWO);
        const result = onePlusTwo(f)(z);
        const successorOfTwo = SUCCESSOR(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });
});

import { ADD_t } from './add';
import { SUCCESSOR_t } from './successor';
describe('ADD_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero plus Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroPlusZero = ADD_t(ZERO)(ZERO);
        const result = zeroPlusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One plus Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = ADD_t(ONE)(ZERO);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero plus One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = ADD_t(ZERO)(ONE);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('One plus Two is the successor of Two', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusTwo = ADD_t(ONE)(TWO);
        const result = onePlusTwo(f)(z);
        const successorOfTwo = SUCCESSOR_t(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });

    it(`One plus Two is the successor of Two even with the successor function for even numbers
        and with the origin (zero) set to 5`, () => {
        const z = 5;
        const f = x => x + 2;
        const onePlusTwo = ADD_t(ONE)(TWO);
        const result = onePlusTwo(f)(z);
        const successorOfTwo = SUCCESSOR_t(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });
});

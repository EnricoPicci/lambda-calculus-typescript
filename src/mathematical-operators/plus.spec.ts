import { expect } from 'chai';
import { PLUS } from './plus';
import { SUCCESSOR } from './successor';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('Plus function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero plus Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroPlusZero = PLUS(ZERO)(ZERO);
        const result = zeroPlusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One plus Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = PLUS(ONE)(ZERO);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero plus One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = PLUS(ZERO)(ONE);
        const result = onePlusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('One plus Two is the successo of Two', () => {
        const z = 0;
        const f = x => x + 1;
        const onePlusZero = PLUS(ONE)(TWO);
        const result = onePlusZero(f)(z);
        const successorOfTwo = SUCCESSOR(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });

    it(`One plus Two is the successo of Two even with the successor function for even numbers
        and with the origin (zero) set to 5`, () => {
        const z = 5;
        const f = x => x + 2;
        const onePlusZero = PLUS(ONE)(TWO);
        const result = onePlusZero(f)(z);
        const successorOfTwo = SUCCESSOR(TWO);
        const resultWithSuccessorOfTwo = successorOfTwo(f)(z);
        expect(result).to.equal(resultWithSuccessorOfTwo);
    });
});

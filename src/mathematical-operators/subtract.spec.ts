import { expect } from 'chai';
import { SUBTRACT } from './subtract';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('SUBTRACT function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero minus Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroMinusZero = SUBTRACT(ZERO)(ZERO);
        const result = zeroMinusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One minus Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const oneMinusZero = SUBTRACT(ONE)(ZERO);
        const result = oneMinusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero minus One is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const oneMinuusZero = SUBTRACT(ZERO)(ONE);
        const result = oneMinuusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('Two minus One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const twoMinusOne = SUBTRACT(TWO)(ONE);
        const result = twoMinusOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it(`Two minus One is One even with the successor function for even numbers
        and with the origin (zero) set to 5`, () => {
        const z = 5;
        const f = x => x + 2;
        const twoMinusOne = SUBTRACT(TWO)(ONE);
        const result = twoMinusOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });
});

import { SUBTRACT_t } from './subtract';
describe('SUBTRACT_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero minus Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroMinusZero = SUBTRACT_t(ZERO)(ZERO);
        const result = zeroMinusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One minus Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const oneMinusZero = SUBTRACT_t(ONE)(ZERO);
        const result = oneMinusZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero minus One is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const oneMinuusZero = SUBTRACT_t(ZERO)(ONE);
        const result = oneMinuusZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('Two minus One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const twoMinusOne = SUBTRACT_t(TWO)(ONE);
        const result = twoMinusOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it(`Two minus One is One even with the successor function for even numbers
        and with the origin (zero) set to 5`, () => {
        const z = 5;
        const f = x => x + 2;
        const twoMinusOne = SUBTRACT_t(TWO)(ONE);
        const result = twoMinusOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });
});

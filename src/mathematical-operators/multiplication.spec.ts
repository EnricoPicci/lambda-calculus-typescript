import { expect } from 'chai';
import { MULT } from './multiplication';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('MULT function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero times Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroTimesZero = MULT(ZERO)(ZERO);
        const result = zeroTimesZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One times Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const oneTimesZero = MULT(ONE)(ZERO);
        const result = oneTimesZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One times Two is Two', () => {
        const z = 0;
        const f = x => x + 1;
        const oneTimesTwo = MULT(ONE)(TWO);
        const result = oneTimesTwo(f)(z);
        const resultWithTwo = TWO(f)(z);
        expect(result).to.equal(resultWithTwo);
    });
});

import { MULT_t } from './multiplication';
describe('MULT_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Zero times Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroTimesZero = MULT_t(ZERO)(ZERO);
        const result = zeroTimesZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One times Zero is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const oneTimesZero = MULT_t(ONE)(ZERO);
        const result = oneTimesZero(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it('One times Two is Two', () => {
        const z = 0;
        const f = x => x + 1;
        const oneTimesTwo = MULT_t(ONE)(TWO);
        const result = oneTimesTwo(f)(z);
        const resultWithTwo = TWO(f)(z);
        expect(result).to.equal(resultWithTwo);
    });
});

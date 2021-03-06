import { expect } from 'chai';
import { EXP } from './exp';
import { ADD } from './add';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';

describe('EXP function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('One exp One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const oneExpOne = EXP(ONE)(ONE);
        const result = oneExpOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Two exp Two is the Two plus Two', () => {
        const z = 0;
        const f = x => x + 1;
        const twoExpTwo = EXP(TWO)(TWO);
        const result = twoExpTwo(f)(z);
        const twoPlusTwo = ADD(TWO)(TWO);
        const resultWithTwoPlusTwo = twoPlusTwo(f)(z);
        expect(result).to.equal(resultWithTwoPlusTwo);
    });

    it('Two exp Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const twoExpZero = EXP(TWO)(ZERO);
        const result = twoExpZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero exp Two is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroExpTwo = EXP(ZERO)(TWO);
        const result = zeroExpTwo(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it(`Two exp Two is the Two plus Two even with the successor function x => x + 3
        and with the origin (zero) set to 7`, () => {
        const z = 7;
        const f = x => x + 3;
        const twoExpTwo = EXP(TWO)(TWO);
        const result = twoExpTwo(f)(z);
        const twoPlusTwo = ADD(TWO)(TWO);
        const resultWithTwoPlusTwo = twoPlusTwo(f)(z);
        expect(result).to.equal(resultWithTwoPlusTwo);
    });
});

import { EXP_t } from './exp';
import { ADD_t } from './add';
describe('EXP_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('One exp One is One', () => {
        const z = 0;
        const f = x => x + 1;
        const oneExpOne = EXP_t(ONE)(ONE);
        const result = oneExpOne(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Two exp Two is the Two plus Two', () => {
        const z = 0;
        const f = x => x + 1;
        const twoExpTwo = EXP_t(TWO)(TWO);
        const result = twoExpTwo(f)(z);
        const twoPlusTwo = ADD_t(TWO)(TWO);
        const resultWithTwoPlusTwo = twoPlusTwo(f)(z);
        expect(result).to.equal(resultWithTwoPlusTwo);
    });

    it('Two exp Zero is One', () => {
        const z = 0;
        const f = x => x + 1;
        const twoExpZero = EXP_t(TWO)(ZERO);
        const result = twoExpZero(f)(z);
        const resultWithOne = ONE(f)(z);
        expect(result).to.equal(resultWithOne);
    });

    it('Zero exp Two is Zero', () => {
        const z = 0;
        const f = x => x + 1;
        const zeroExpTwo = EXP_t(ZERO)(TWO);
        const result = zeroExpTwo(f)(z);
        const resultWithZero = ZERO(f)(z);
        expect(result).to.equal(resultWithZero);
    });

    it(`Two exp Two is the Two plus Two even with the successor function x => x + 3
        and with the origin (zero) set to 7`, () => {
        const z = 7;
        const f = x => x + 3;
        const twoExpTwo = EXP_t(TWO)(TWO);
        const result = twoExpTwo(f)(z);
        const twoPlusTwo = ADD_t(TWO)(TWO);
        const resultWithTwoPlusTwo = twoPlusTwo(f)(z);
        expect(result).to.equal(resultWithTwoPlusTwo);
    });
});

import { expect } from 'chai';
import { EQUAL } from './equal';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';
import { SUCCESSOR } from '../mathematical-operators/successor';
import { PREDECESSOR } from '../mathematical-operators/predecessor';
import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';

describe('EQUAL function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('zero is equal to zero', () => {
        const result = EQUAL(ZERO)(ZERO);
        expect(result).to.equal(T);
    });

    it('one is not equal to zero', () => {
        const result = EQUAL(ONE)(ZERO);
        expect(result).to.equal(F);
    });

    it('two is equal to two', () => {
        const result = EQUAL(TWO)(TWO);
        expect(result).to.equal(T);
    });

    it('the successor of TWO is not equal to TWO', () => {
        const THREE = SUCCESSOR(TWO);
        const result = EQUAL(THREE)(TWO);
        expect(result).to.equal(F);
    });

    it('the successor of ONE is equal to TWO', () => {
        const two = SUCCESSOR(ONE);
        const result = EQUAL(two)(TWO);
        expect(result).to.equal(T);
    });

    it('the predecessor of TWO is equal to ONE', () => {
        const two = SUCCESSOR(ONE);
        const one = PREDECESSOR(two);
        expect(EQUAL(one)(ONE)).to.equal(T);
    });

    it('the predecessor of TWO is equal to ONE', () => {
        const two = SUCCESSOR(ONE);
        const one = PREDECESSOR(two);
        expect(EQUAL(one)(ONE)).to.equal(T);
    });

    it('ONE is not equal to TWO', () => {
        const result = EQUAL(ONE)(TWO);
        expect(result).to.equal(F);
    });
});

import { EQUAL_t } from './equal';
import { SUCCESSOR_t } from '../mathematical-operators/successor';
import { SUCC } from '../mathematical-operators/successor';
import { PRED } from '../mathematical-operators/predecessor';
describe('LEQ typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('zero is equal to zero', () => {
        const result = EQUAL_t(ZERO)(ZERO);
        expect(result).to.equal(T);
    });

    it('one is not equal to zero', () => {
        const result = EQUAL_t(ONE)(ZERO);
        expect(result).to.equal(F);
    });

    it('two is equal to two', () => {
        const result = EQUAL_t(TWO)(TWO);
        expect(result).to.equal(T);
    });

    it('the successor of TWO is not equal to TWO', () => {
        const THREE = SUCCESSOR_t(TWO);
        const result = EQUAL_t(THREE)(TWO);
        expect(result).to.equal(F);
    });

    it('the successor of ONE is equal to TWO', () => {
        const two = SUCCESSOR_t(ONE);
        const result = EQUAL_t(two)(TWO);
        expect(result).to.equal(T);
    });

    it('the predecessor of TWO is equal to ONE', () => {
        const two = SUCC(SUCC(ZERO));
        const one = PRED(two);
        expect(EQUAL(one)(ONE)).to.equal(T);
    });

    it('ONE is not equal to TWO', () => {
        const result = EQUAL_t(ONE)(TWO);
        expect(result).to.equal(F);
    });
});

import { expect } from 'chai';
import { EQUAL } from './equal';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';
import { SUCCESSOR } from '../mathematical-operators/successor';
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

    it('ONE is not equal to TWO', () => {
        const result = EQUAL(ONE)(TWO);
        expect(result).to.equal(F);
    });
});

import { EQUAL_t } from './equal';
import { SUCCESSOR_t } from '../mathematical-operators/successor';
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

    it('ONE is not equal to TWO', () => {
        const result = EQUAL_t(ONE)(TWO);
        expect(result).to.equal(F);
    });
});

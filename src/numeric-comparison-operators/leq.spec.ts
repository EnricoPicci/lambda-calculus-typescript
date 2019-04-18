import { expect } from 'chai';
import { LEQ } from './leq';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';
import { SUCCESSOR } from '../mathematical-operators/successor';
import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';

describe('LEQ function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('zero is leq than zero', () => {
        const result = LEQ(ZERO)(ZERO);
        expect(result).to.equal(T);
    });

    it('one is not leq not zero', () => {
        const result = LEQ(ONE)(ZERO);
        expect(result).to.equal(F);
    });

    it('the successor of TWO is not leq TWO', () => {
        const THREE = SUCCESSOR(TWO);
        const result = LEQ(THREE)(TWO);
        expect(result).to.equal(F);
    });

    it('ONE is leq TWO', () => {
        const result = LEQ(ONE)(TWO);
        expect(result).to.equal(T);
    });
});

import { LEQ_t } from './leq';
import { SUCCESSOR_t } from '../mathematical-operators/successor';
describe('LEQ typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('zero is leq than zero', () => {
        const result = LEQ_t(ZERO)(ZERO);
        expect(result).to.equal(T);
    });

    it('one is not leq not zero', () => {
        const result = LEQ_t(ONE)(ZERO);
        expect(result).to.equal(F);
    });

    it('the successor of TWO is not leq TWO', () => {
        const THREE = SUCCESSOR_t(TWO);
        const result = LEQ_t(THREE)(TWO);
        expect(result).to.equal(F);
    });

    it('ONE is leq TWO', () => {
        const result = LEQ_t(ONE)(TWO);
        expect(result).to.equal(T);
    });
});

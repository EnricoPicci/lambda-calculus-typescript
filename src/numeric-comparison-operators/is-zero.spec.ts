import { expect } from 'chai';
import { ISZERO } from './is-zero';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { TWO } from '../natural-numbers/_2_';
import { SUCCESSOR } from '../mathematical-operators/successor';
import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';

describe('IsZero function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('zero is zero', () => {
        const result = ISZERO(ZERO);
        expect(result).to.equal(T);
    });

    it('one is not zero', () => {
        const result = ISZERO(ONE);
        expect(result).to.equal(F);
    });

    it('the successor of TWO is not zero', () => {
        const THREE = SUCCESSOR(TWO);
        const result = ISZERO(THREE);
        expect(result).to.equal(F);
    });
});

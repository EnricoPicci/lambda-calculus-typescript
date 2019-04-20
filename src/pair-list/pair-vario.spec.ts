import { expect } from 'chai';
import { PAIR } from './pair-vario';
import { NOT } from '../bolean-logic/not';
import { B } from '../combinators/function-composition-bluebird';
import { T } from '../bolean-logic/true';

describe('PAIR function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('a PAIR of NOT composed with B are a NOT', () => {
        const pairOfNot = PAIR(NOT)(NOT);
        const pairOfNotComposed = pairOfNot(B);
        expect(pairOfNotComposed(T)).to.equal(T);
    });
});

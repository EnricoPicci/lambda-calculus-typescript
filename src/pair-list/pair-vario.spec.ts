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

import { PAIR_t } from './pair-vario';
import { F } from '../bolean-logic/false';
import { BOOL } from '../bolean-logic/boolean';
import { FIRST_t } from './first-head-car';
describe('PAIR typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('The first of a PAIR of T  and F is T', () => {
        const pairOfTandF = PAIR_t<BOOL>(T)(F);
        expect(FIRST_t(pairOfTandF)).to.equal(T);
    });
});

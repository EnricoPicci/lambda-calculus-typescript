import { expect } from 'chai';
import { FIRST } from './first-head-car';
import { PAIR } from './pair-vario';
import { I } from '../combinators/identity';
import { M } from '../combinators/self-application-mockingbird';

describe('FIRST function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('FIRST of a PAIR of I and M is I', () => {
        const pairOfIadnM = PAIR(I)(M);
        expect(FIRST(pairOfIadnM)).to.equal(I);
    });
});

import { FIRST_t } from './first-head-car';
import { PAIR_t } from './pair-vario';
// import { PAIR_TYPE } from './pair-vario';
import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';
import { BOOL } from '../bolean-logic/boolean';
describe('FIRST typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('FIRST of a PAIR of I and M is I', () => {
        const pairOfIandM = PAIR_t(I)(M);
        expect(FIRST_t(pairOfIandM)).to.equal(I);
    });

    it('FIRST of a PAIR of T and F is T', () => {
        const pairOfTandF = PAIR_t<BOOL>(T)(F);
        expect(FIRST_t<BOOL>(pairOfTandF)).to.equal(T);
    });
});

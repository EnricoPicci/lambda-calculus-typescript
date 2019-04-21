import { expect } from 'chai';
import { SECOND } from './second-tail-cdr';
import { PAIR } from './pair-vario';
import { I } from '../combinators/identity';
import { M } from '../combinators/self-application-mockingbird';

describe('SECOND function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('SECOND of a PAIR of I and M is M', () => {
        const pairOfIadnM = PAIR(I)(M);
        expect(SECOND(pairOfIadnM)).to.equal(M);
    });
});

import { SECOND_t } from './second-tail-cdr';
import { PAIR_t } from './pair-vario';
import { PAIR_TYPE } from './pair-vario';
import { T } from '../bolean-logic/true';
import { F } from '../bolean-logic/false';
import { BOOL } from '../bolean-logic/boolean';
describe('SECOND typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('SECOND of a PAIR of I and M is M', () => {
        const pairOfIadnM: PAIR_TYPE<any> = PAIR(I)(M);
        expect(SECOND_t(pairOfIadnM)).to.equal(M);
    });

    it('SECOND of a PAIR of T and F is F', () => {
        const pairOfTandF = PAIR_t<BOOL>(T)(F);
        expect(SECOND_t<BOOL>(pairOfTandF)).to.equal(F);
    });
});

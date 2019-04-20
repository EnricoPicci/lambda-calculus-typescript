import { expect } from 'chai';
import { I } from './identity';

describe('Identity function applied to Javascript primitives / objects', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('returns the same object', () => {
        const a = 'abc';
        const result = I(a);
        expect(result === a).to.be.true;
    });
});

import { ONE } from '../natural-numbers/_1_';
describe('Identity function applied to Lambdas', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('returns the same object', () => {
        expect(I(ONE)).to.equal(ONE);
    });

    it('identity of identity', () => {
        expect(I(I)).to.equal(I);
    });
});

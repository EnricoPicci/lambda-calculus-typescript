import { expect } from 'chai';
import { I } from './identity';

describe('Identity function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('returns the same object', () => {
        const a = 'abc';
        const result = I(a);
        expect(result === a).to.be.true;
    });

    it('identity of identity', () => {
        const result = I(I);
        expect(result === I).to.be.true;
    });
});

import { expect } from 'chai';
import { _2_ } from './_2_';

describe('Two function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('TWO returns 2 if applied with 0 and successor function for natural numbers', () => {
        const z = 0;
        const f = x => x + 1;
        const result = _2_(f)(z);
        expect(result).to.equal(2);
    });

    it('TWO returns 4 if applied with 0 and successor function for even numbers', () => {
        const z = 0;
        const f = x => x + 2;
        const result = _2_(f)(z);
        expect(result).to.equal(4);
    });
});

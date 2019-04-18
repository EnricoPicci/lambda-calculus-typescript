import { expect } from 'chai';
import { AND } from './and';
import { T } from './true';
import { F } from './false';

describe('AND function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true AND true is true', () => {
        expect(AND(T)(T)).to.equal(T);
    });

    it('false AND true is false', () => {
        expect(AND(F)(T)).to.equal(F);
    });

    it('false AND false is false', () => {
        expect(AND(F)(F)).to.equal(F);
    });

    it('true AND false is true', () => {
        expect(AND(T)(F)).to.equal(F);
    });
});

import { AND_t } from './and';
describe('AND_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true AND true is true', () => {
        const result = AND_t(T)(T);
        expect(result).to.equal(T);
    });

    it('false AND true is false', () => {
        const result = AND_t(F)(T);
        expect(result).to.equal(F);
    });

    it('false AND false is false', () => {
        const result = AND_t(F)(F);
        expect(result).to.equal(F);
    });

    it('true AND false is true', () => {
        const result = AND_t(T)(F);
        expect(result).to.equal(F);
    });
});

import { expect } from 'chai';
import { OR } from './or';
import { T } from './true';
import { F } from './false';

describe('OR function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true OR true is true', () => {
        expect(OR(T)(T)).to.equal(T);
    });

    it('false OR true is true', () => {
        expect(OR(F)(T)).to.equal(T);
    });

    it('false OR false is false', () => {
        expect(OR(F)(F)).to.equal(F);
    });

    it('true OR false is true', () => {
        expect(OR(T)(F)).to.equal(T);
    });
});

import { OR_t } from './or';
describe('OR_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true OR true is true', () => {
        const result = OR_t(T)(T);
        expect(result).to.equal(T);
    });

    it('false OR true is true', () => {
        const result = OR_t(F)(T);
        expect(result).to.equal(T);
    });

    it('false OR false is false', () => {
        const result = OR_t(F)(F);
        expect(result).to.equal(F);
    });

    it('true OR false is true', () => {
        const result = OR_t(T)(F);
        expect(result).to.equal(T);
    });
});

import { expect } from 'chai';
import { XOR } from './xor';
import { T } from './true';
import { F } from './false';

describe('XOR function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true XOR true is false', () => {
        expect(XOR(T)(T)).to.equal(F);
    });

    it('false XOR true is true', () => {
        expect(XOR(F)(T)).to.equal(T);
    });

    it('false XOR false is false', () => {
        expect(XOR(F)(F)).to.equal(F);
    });

    it('true XOR false is true', () => {
        expect(XOR(T)(F)).to.equal(T);
    });
});

import { XOR_t } from './xor';
describe('XOR_t function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('true XOR true is false', () => {
        const result = XOR_t(T)(T);
        expect(result).to.equal(F);
    });

    it('false XOR true is true', () => {
        const result = XOR_t(F)(T);
        expect(result).to.equal(T);
    });

    it('false XOR false is false', () => {
        const result = XOR_t(F)(F);
        expect(result).to.equal(F);
    });

    it('true XOR false is true', () => {
        const result = XOR_t(T)(F);
        expect(result).to.equal(T);
    });
});

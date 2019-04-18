import { expect } from 'chai';
import { NOT } from './not';
import { T } from './true';
import { F } from './false';

describe('NOT function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Not TRUE is FALSE and therefore selects the second option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        expect(NOT(T)(black)(white)).to.equal(white);
    });

    it('Not FALSE is TRUE and therefore selects the first option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        expect(NOT(F)(black)(white)).to.equal(black);
    });

    it('Not TRUE is FALSE', () => {
        expect(NOT(T)).to.equal(F);
    });

    it('Not FALSE is TRUE', () => {
        expect(NOT(F)).to.equal(T);
    });
});

import { NOT_t } from './not';
describe('NOT_t typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Not TRUE is FALSE and therefore selects the second option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        const resultNot = NOT_t(T);
        expect(resultNot(black)(white)).to.equal(white);
    });

    it('Not FALSE is TRUE and therefore selects the first option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        const resultNot = NOT_t(F);
        expect(resultNot(black)(white)).to.equal(black);
    });

    it('Not TRUE is FALSE', () => {
        const result = NOT_t(T);
        expect(result).to.equal(F);
    });

    it('Not FALSE is TRUE', () => {
        const result = NOT_t(F);
        expect(result).to.equal(T);
    });
});

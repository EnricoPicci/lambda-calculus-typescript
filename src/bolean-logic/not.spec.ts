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

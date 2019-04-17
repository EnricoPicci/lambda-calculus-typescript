import { expect } from 'chai';
import { NOT_ } from './not_';
import { T } from './true';
import { F } from './false';

describe('NOT function implemented with flip-cardinal combinator', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Not TRUE is FALSE and therefore selects the second option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        expect(NOT_(T)(black)(white)).to.equal(white);
    });

    it('Not FALSE is TRUE and therefore selects the first option', () => {
        const black = Symbol('black');
        const white = Symbol('white');
        expect(NOT_(F)(black)(white)).to.equal(black);
    });
});

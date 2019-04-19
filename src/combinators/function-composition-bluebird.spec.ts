import { expect } from 'chai';
import { B } from './function-composition-bluebird';
import { TWICE } from '../natural-numbers/_2_';
import { NOT } from '../bolean-logic/not';
import { T } from '../bolean-logic/true';

describe('Bluebird or left function composition', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Bluebird applied to NOT and NOT', () => {
        const result = B(NOT)(NOT)(T);
        expect(result).to.equal(T);
    });

    it('Bluebird applied to TWICE and TWICE', () => {
        const z = 0;
        const f = x => x + 1;
        const result = B(TWICE)(TWICE)(f)(z);
        expect(result).to.equal(4);
    });
});

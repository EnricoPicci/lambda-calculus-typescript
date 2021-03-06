import { expect } from 'chai';
import { _1_ } from './_1_';

describe('ONE function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('ONE returns 1', () => {
        const z = 0;
        const f = x => x + 1;
        const result = _1_(f)(z);
        expect(result).to.equal(1);
    });

    it('ONE returns 4 if zro is set to 3', () => {
        const z = 3;
        const f = x => x + 1;
        const result = _1_(f)(z);
        expect(result).to.equal(4);
    });

    it('ONE returns 5 if zro is set to 3 and successor function for even numbers', () => {
        const z = 3;
        const f = x => x + 2;
        const result = _1_(f)(z);
        expect(result).to.equal(5);
    });
});

import { ONCE } from './_1_';
import { I } from '../combinators/identity';
describe('ONCE function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('ONCE, which is the same function as ONE with no typing, is the Identity function', () => {
        const z = 11;
        const f = x => x + 12;
        const result = ONCE(f)(z);
        const resultIndentity = I(f)(z);
        expect(result).to.equal(resultIndentity);
    });
});

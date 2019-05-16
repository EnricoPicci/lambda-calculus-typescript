import { expect } from 'chai';
import { M } from './self-application-mockingbird';
import { I } from './identity';

describe('Self application combinator aka Mockingbird', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Mockingbird applied to Identity', () => {
        expect(M(I)).to.equal(I);
    });

    it('Mockingbird applied to Mockingbird', () => {
        try {
            M(M);
        } catch (err) {
            expect(err.name).to.equal('RangeError');
        }
    });
});

describe('Mockingbird to explain recursion', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Mockingbird applied to a unary function that assumes that the param is a number', () => {
        const f = x => x * 2;
        expect(M(f)).to.be.NaN;
    });

    it('Mockingbird applied to a binary function that assumes that the params are numbers', () => {
        const f = x => y => x * y * 2;
        expect(M(f)(3)).to.be.NaN;
    });

    it('Mockingbird applied to a function that retuns a unary function that assumes that param is a number', () => {
        const f = g => x => x * 2;
        expect(M(f)(3)).to.equal(6);
    });

    // it('Mockingbird applied to itself', () => {
    //     M(M);
    // });
});

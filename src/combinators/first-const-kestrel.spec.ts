import { expect } from 'chai';
import { K } from './first-const-kestrel';
import { I } from './identity';

describe('Kestrel', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Kestrel applied to 2 different things', () => {
        const something = Symbol('something');
        const somethingElse = Symbol('somethingElse');
        const result = K(something)(somethingElse);
        expect(result).to.equal(something);
    });

    it('via Kestrel you can create the constant function', () => {
        const constantValue = 5;
        const constantFunction = K(constantValue);
        // no matter what you pass into the constant function you will always get the same constant value
        const anything = Symbol('anything');
        const result = constantFunction(anything);
        expect(result).to.equal(constantValue);
    });

    it('Kestrel applied to Identity ruturns the Kite combinator', () => {
        const something = Symbol('something');
        const somethingElse = Symbol('somethingElse');
        const KtoIdentity = K(I);
        const result = KtoIdentity(something)(somethingElse);
        expect(result).to.equal(somethingElse);
    });
});

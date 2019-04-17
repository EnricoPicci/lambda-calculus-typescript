import { expect } from 'chai';
import { KI } from './second-kite';
import { K } from './first-const-kestrel';
import { I } from './identity';

describe('Kite', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Kite applied to 2 different things', () => {
        const something = Symbol('something');
        const somethingElse = Symbol('somethingElse');
        const result = KI(something)(somethingElse);
        expect(result).to.equal(somethingElse);
    });

    it('via Kite you can create the Identity function', () => {
        const anything = Symbol('anything');
        const identityFunction = KI(anything);
        // no matter what 'anything' is the identityFunction will always return the value you pass in
        const something = Symbol('something');
        const result = identityFunction(something);
        expect(result).to.equal(something);
    });

    it('The Kite combinator is the Kestrel combinator applied to Identity', () => {
        const something = Symbol('something');
        const somethingElse = Symbol('somethingElse');
        const KtoIdentity = K(I);
        const result = KtoIdentity(something)(somethingElse);
        expect(result).to.equal(somethingElse);
    });
});

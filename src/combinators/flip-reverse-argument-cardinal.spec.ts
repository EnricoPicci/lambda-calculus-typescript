import { expect } from 'chai';
import { C } from './flip-reverse-argument-cardinal';
import { K } from './first-const-kestrel';
import { KI } from './second-kite';

describe('Cardinal', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('Cardinal applied to division returns 1', () => {
        const fistNumber = 10;
        const secondNumber = 2;
        const divide = a => b => a / b;
        const divisionResult = divide(fistNumber)(secondNumber);
        const reversedDivision = C(divide)(fistNumber)(secondNumber);
        expect(divisionResult * reversedDivision).to.equal(1);
    });

    it('Cardinal applied to Kestrel ruturns the Kite combinator', () => {
        const something = Symbol('something');
        const somethingElse = Symbol('somethingElse');
        const CardinalAppliedtoKestrel = C(K);
        const result = CardinalAppliedtoKestrel(something)(somethingElse);
        const expectedResult = KI(something)(somethingElse);
        expect(result).to.equal(expectedResult);
    });
});

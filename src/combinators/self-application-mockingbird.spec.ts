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

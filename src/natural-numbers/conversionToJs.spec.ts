import { expect } from 'chai';
import { jsNumber, jsRepresentation } from './conversionToJs';

import { ZERO } from './_0_';
import { ONE } from './_1_';
import { TWO } from './_2_';

describe('jsNumber function', () => {
    it('TWO returns 2', () => {
        const result = jsNumber(TWO);
        expect(result).to.equal(2);
    });

    it('ZERO is represented by 0', () => {
        const z = 0;
        const f = x => (x + 1) ^ 2;
        const result = jsNumber(ZERO, f, z);
        expect(result).to.equal(0);
    });

    it('ONE is represented by 1', () => {
        const z = 0;
        const f = x => (x + 1) * (x + 1);
        const result = jsNumber(ONE, f, z);
        expect(result).to.equal(1);
    });

    it('TWO is represented by 4', () => {
        const z = 0;
        const f = x => (x + 1) * (x + 1);
        const result = jsNumber(TWO, f, z);
        expect(result).to.equal(4);
    });

    it('TWO is represented by 25', () => {
        const z = 1;
        const f = x => (x + 1) * (x + 1);
        const result = jsNumber(TWO, f, z);
        expect(result).to.equal(25);
    });

    it('ZERO is represented by 0', () => {
        const z = 0;
        const f = x => Math.sin(((x + 1) * Math.PI) / 2);
        const result = jsNumber(ZERO, f, z);
        expect(result).to.equal(0);
    });

    it('ONE is represented by 1', () => {
        const z = 0;
        const f = x => Math.sin(((x + 1) * Math.PI) / 2);
        const result = jsNumber(ONE, f, z);
        expect(result).to.equal(1);
    });

    it('TWO is represented by 0', () => {
        const z = 0;
        const f = x => Math.sin(((x + 1) * Math.PI) / 2);
        const result = jsNumber(TWO, f, z);
        expect(Math.round(result * 1000) / 1000).to.equal(0);
    });
});

describe('jsNumber function', () => {
    it('TWO is represented as a string "==abcabc", i.e. 2 times the repetition of "abc" preceeded by "=="', () => {
        const z = '==';
        const f = x => x + 'abc';
        const result = jsRepresentation(TWO, f, z);
        expect(result).to.equal('==abcabc');
    });
});

import { expect } from 'chai';
import { ZERO } from '../src/natural-numbers/_0_';
import { ONE } from '../src/natural-numbers/_1_';
import { SUCC } from '../src/mathematical-operators/successor';
import { λ } from '../src/lambda';
import { EQ } from '../src/numeric-comparison-operators/equal';
import { ADD } from '../src/mathematical-operators/add';
import { SUB } from '../src/mathematical-operators/subtract';

describe('Build the solution to the problem', () => {
    // The problem states that if 2 numbers are equal we sum them, otherwise we subtract the second from the first
    // So, given than m and n are our numbers, our logic is
    // (EQ(m)(n)) (ADD(m)(n)) (SUB(m)(n))
    //
    // Let's read it
    // (EQ(m)(n))
    // returns TRUE if m and n are equal and FALSE otherwise
    // TRUE is a binary function, i.e. a function which accepts 2 arguments, that returns the first one ignoring the second
    // FALSE is a binary function opposite to FALSE
    // So, if m equals n, than
    // (EQ(m)(n)) (ADD(m)(n)) (SUB(m)(n))
    // returns The opposite happens if m is not equal to n
    const PROBLEM_SOLUTION = m => n => EQ(m)(n)(ADD(m)(n))(SUB(m)(n));
    it('m and n are ONE, i.e. they are equal and therefore they get summed', () => {
        const f: λ = x => x + 1;
        const a = 0;
        const probSol = PROBLEM_SOLUTION(ONE)(ONE);
        const applyProbSolToArgs = probSol(f)(a);
        const TWO = SUCC(ONE);
        const applyTWOToArgs = TWO(f)(a);
        expect(applyProbSolToArgs).to.equal(applyTWOToArgs);
    });
    it('m is TWO and n is ONE, i.e. they are not equal and therefore we subtract n from m and the result is ONE', () => {
        const f: λ = x => x + 1;
        const a = 0;
        const TWO = SUCC(ONE);
        const probSol = PROBLEM_SOLUTION(TWO)(ONE);
        const applyProbSolToArgs = probSol(f)(a);
        const applyONEToArgs = ONE(f)(a);
        expect(applyProbSolToArgs).to.equal(applyONEToArgs);
    });
    it(`m is ONE and n is TWO, i.e. they are not equal and therefore we subtract n from m and the result is ZERO
        since SUB returns ZERO if n is greater than m`, () => {
        const f: λ = x => x + 1;
        const a = 0;
        const TWO = SUCC(ONE);
        const probSol = PROBLEM_SOLUTION(ONE)(TWO);
        const applyProbSolToArgs = probSol(f)(a);
        const applyZEROToArgs = ZERO(f)(a);
        expect(applyProbSolToArgs).to.equal(applyZEROToArgs);
    });
});

type uF = (x: any) => any;
type NUMBER = (f: uF) => (x: any) => any;
type BOOL = (x: any) => (y: any) => any;

const SOL = (m: NUMBER) => (n: NUMBER) =>
    ((m: NUMBER) => (n: NUMBER) =>
        ((p: BOOL) => (q: BOOL) => p(q)(p))(
            ((m: NUMBER) => (n: NUMBER) =>
                ((n: NUMBER) => n(x => (a: any) => (b: any) => b)((a: any) => (b: any) => a))(
                    ((m: NUMBER) => (n: NUMBER) =>
                        n((n: NUMBER) => (f: uF) => (x: any) =>
                            n((g: uF) => (h: uF) => h(g(f)))((u: any) => x)((u: any) => u),
                        )(m))(m)(n),
                ))(m)(n),
        )(
            ((m: NUMBER) => (n: NUMBER) =>
                ((n: NUMBER) => n(x => (a: any) => (b: any) => b)((a: any) => (b: any) => a))(
                    ((m: NUMBER) => (n: NUMBER) =>
                        n((n: NUMBER) => (f: uF) => (x: any) =>
                            n((g: uF) => (h: uF) => h(g(f)))((u: any) => x)((u: any) => u),
                        )(m))(m)(n),
                ))(n)(m),
        ))(m)(n)(((m: NUMBER) => (n: NUMBER) => (f: uF) => (x: any) => n(f)(m(f)(x)))(m)(n))(
        ((m: NUMBER) => (n: NUMBER) =>
            n((n: NUMBER) => (f: uF) => (x: any) => n((g: uF) => (h: uF) => h(g(f)))((u: any) => x)((u: any) => u))(m))(
            m,
        )(n),
    );

import { expect } from 'chai';
import { ZERO } from '../src/natural-numbers/_0_';
import { ONE } from '../src/natural-numbers/_1_';
import { SUCC } from '../src/mathematical-operators/successor';
describe('Expand the solution to show only anonymous lambdas', () => {
    it('2.1 m and n are ONE, i.e. they are equal and therefore they get summed', () => {
        const f: uF = x => x + 1;
        const a = 0;
        const probSol = SOL(ONE)(ONE);
        const applyProbSolToArgs = probSol(f)(a);
        const TWO = SUCC(ONE);
        const applyTWOToArgs = TWO(f)(a);
        expect(applyProbSolToArgs).to.equal(applyTWOToArgs);
    });
    it('2.2 m is TWO and n is ONE, i.e. they are not equal and therefore we subtract n from m and the result is ONE', () => {
        const f: uF = x => x + 1;
        const a = 0;
        const TWO = SUCC(ONE);
        const probSol = SOL(TWO)(ONE);
        const applyProbSolToArgs = probSol(f)(a);
        const applyONEToArgs = ONE(f)(a);
        expect(applyProbSolToArgs).to.equal(applyONEToArgs);
    });
    it(`2.3 m is ONE and n is TWO, i.e. they are not equal and therefore we subtract n from m and the result is ZERO
            since SUB returns ZERO if n is greater than m`, () => {
        const f: uF = x => x + 1;
        const a = 0;
        const TWO = SUCC(ONE);
        const probSol = SOL(ONE)(TWO);
        const applyProbSolToArgs = probSol(f)(a);
        const applyZEROToArgs = ZERO(f)(a);
        expect(applyProbSolToArgs).to.equal(applyZEROToArgs);
    });
});

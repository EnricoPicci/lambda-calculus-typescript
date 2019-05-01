import { expect } from 'chai';
import { FALSE } from '../src/bolean-logic/false';
import { TRUE } from '../src/bolean-logic/true';
import { ZERO } from '../src/natural-numbers/_0_';
import { SUCC } from '../src/mathematical-operators/successor';
import { jsNumber } from '../src/natural-numbers/conversionToJs';

describe('How to define predecessor PRED function', () => {
    // define the type PAIR function
    const PAIR = x => y => f => f(x)(y);

    // define the SECOND function
    const SECOND = p => p(FALSE);
    it('The second of a pair (1,2) is 2', () => {
        const pair_1_2 = PAIR(1)(2);
        expect(SECOND(pair_1_2)).to.equal(2);
    });

    // define the FIRST function
    const FIRST = p => p(TRUE);
    it('The first of a pair (1,2) is 1', () => {
        const pair_1_2 = PAIR(1)(2);
        expect(FIRST(pair_1_2)).to.equal(1);
    });

    const PHI = p => PAIR(SECOND(p))(SUCC(SECOND(p)));
    it('3 applications of PHI on (0,0) return (2,3)', () => {
        const THREE = SUCC(SUCC(SUCC(ZERO)));
        const pair_2_3 = THREE(PHI)(PAIR(ZERO)(ZERO));
        const first_pair_2_3 = FIRST(pair_2_3);
        expect(jsNumber(first_pair_2_3)).to.equal(2);
        const second_pair_2_3 = SECOND(pair_2_3);
        expect(jsNumber(second_pair_2_3)).to.equal(3);
    });

    const PRED = n => FIRST(n(PHI)(PAIR(ZERO)(ZERO)));
    it('PRED of THREE is TWO', () => {
        const TWO = SUCC(SUCC(ZERO));
        const THREE = SUCC(TWO);
        const pred_2 = PRED(THREE);
        expect(jsNumber(pred_2)).to.equal(2);
    });
});

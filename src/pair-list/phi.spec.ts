import { expect } from 'chai';
import { PHI } from './phi';
import { PAIR } from './pair-vario';
import { ZERO } from '../natural-numbers/_0_';
import { ONE } from '../natural-numbers/_1_';
import { FIRST } from './first-head-car';
import { SECOND } from './second-tail-cdr';
import { SUCCESSOR } from '../mathematical-operators/successor';
import { EQUAL } from '../numeric-comparison-operators/equal';
import { T } from '../bolean-logic/true';

describe('PHI function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('PHI of a PAIR of ZERO and ONE is a pair of ONE and TWO', () => {
        const pair_0_1 = PAIR(ZERO)(ONE);
        const phi_0_1 = PHI(pair_0_1);
        const one = FIRST(phi_0_1);
        expect(one).to.equal(ONE);
        const two = SECOND(phi_0_1);
        const successorOfOne = SUCCESSOR(ONE);
        expect(EQUAL(two)(successorOfOne)).to.equal(T);
    });
});

import { PHI_t } from './phi';
import { PAIR_t } from './pair-vario';
import { NUMBER } from '../natural-numbers/number';
import { FIRST_t } from './first-head-car';
import { SECOND_t } from './second-tail-cdr';
import { SUCCESSOR_t } from '../mathematical-operators/successor';
describe('PHI typed function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('PHI of a PAIR of ZERO and ONE is a pair of ONE and TWO', () => {
        const pair_0_1 = PAIR_t<NUMBER>(ZERO)(ONE);
        const phi_0_1 = PHI_t(pair_0_1);
        const one = FIRST_t<NUMBER>(phi_0_1);
        expect(one).to.equal(ONE);
        const two = SECOND_t<NUMBER>(phi_0_1);
        const successorOfOne = SUCCESSOR_t(ONE);
        expect(EQUAL(two)(successorOfOne)).to.equal(T);
    });
});

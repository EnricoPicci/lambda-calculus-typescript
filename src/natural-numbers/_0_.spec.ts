import { expect } from 'chai';
import { ZERO } from './_0_';

describe('Zero function', () => {
    beforeEach(() => {});

    afterEach(() => {});

    it('ZERO returns 0', () => {
        const f = x => y => x + y;
        const x = 0;
        const result = ZERO(f)(x);
        expect(result).to.equal(x);
    });

    it('Zero', () => {
        const something = Symbol('something');
        const anything = Symbol('anything');
        const resultWithNull = ZERO(null)(something);
        const resultWithAnything = ZERO(anything)(something);
        expect(resultWithNull).to.equal(resultWithAnything);
    });
});

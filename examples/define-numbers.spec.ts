import { expect } from 'chai';

describe('How to define numbers with Lambda - Church numerals', () => {
    // define the type lambda as a function that receives an argument and returns something
    type λ = (x: any) => any;

    // ZERO = λfx. x
    const ZERO = (f: λ) => (x: any) => x;

    // ONE = λfx. f x
    const ONE = (f: λ) => (x: any) => f(x);

    // TWO = λfx. f( f x)
    const TWO = (f: λ) => (x: any) => f(f(x));

    type NUMBER = (f: λ) => (x: any) => any;

    // let's see what is
    // WHAT = λnfx. f( n f x)
    const WHAT = (n: NUMBER) => (f: λ) => (x: any) => f(n(f)(x));
    // we can see that if we pass a NUMBER to WHAT it returns something of type NUMBER

    // What happens if we apply WHAT to ZERO
    // (λnfx. f( n x))(ZERO) ->
    // λfx. f( ZERO f x) ->
    // λfx. f( (λfx. x) f x) ->
    // λfx. f x
    // The result of the transformation (beta-reduction) is ONE, since
    // ONE = λfx. f x
    // as per our definition
    // If we try to apply WHAT to ONE we will get TWO
    // So WHAT is actually the SUCCESSOR (or SUCC) function
    const SUCC = WHAT;
    const one = SUCC(ZERO);
    const two = SUCC(ONE);

    it('TWO and two are not the same object in Typescript', () => {
        expect(TWO === two).to.be.false;
    });
    // but at the same time for whatever arguments we pass to these to functions they return the same value,
    // so they are indistinguable, i.e. extensionally equal
    //
    // Let's try the equality passing to TWO and two the same arguments, i.e. a function and an argument (remember that
    // TWO and two are 2 lambda functions of type NUMBER and therefore they expect to receive a function f of type
    // λ and an argument x to be applied to the function f)
    const f: λ = x => x + 1;
    const a = 0;
    const resultWithTWO = TWO(f)(a);
    const resultWithTwo = two(f)(a);
    it('TWO and two are extensioally equal', () => {
        expect(resultWithTWO).to.equal(resultWithTwo);
    });
    const resultWithOne = one(f)(0);
    // the result obtained applying the same function f and argument 0 to 'one' is different
    it('one and two are not extensioally equal', () => {
        expect(resultWithOne).to.not.equal(resultWithTwo);
    });

    // and, by the way, passing the function f defined as the numeric increment by 1 and 0 as argument,
    // we obtain the Typescript number 2
    it('two evaluates to the number 2 using the incrementByOne function and 0 as argument', () => {
        expect(resultWithTWO).to.equal(2);
    });

    // If rather than incrementing by 1 a number, we use a string concatenation, we maintain the equivalence
    // but we get differen Typescript objects
    const fConcat = x => x + '*';
    const aString = '';
    const resultWithTWOString = TWO(fConcat)(aString);
    const resultWithTwoString = two(fConcat)(aString);
    it('TWO and two are extensioally equal', () => {
        expect(resultWithTWOString).to.equal(resultWithTwoString);
    });

    it('two evaluates to a tring of 2 characters', () => {
        expect(resultWithTWOString).to.equal('**');
    });
});

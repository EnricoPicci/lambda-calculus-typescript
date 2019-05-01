import { expect } from 'chai';

describe('How to define numbers with Lambda - Church numerals', () => {
    // define the type lambda as a function that receives a λ as argument and returns another λ
    type λ = (x: λ) => λ;
    // define uF as the unary function type, i.e. the type of a function which receives an argument and returns something
    type uF = (x: any) => any;

    type NUMBER = (f: uF) => (x: any) => any;

    // ZERO = λfx. x
    const ZERO: NUMBER = (f: uF) => (x: any) => x;

    // ONE = λfx. f x
    const ONE: NUMBER = (f: uF) => (x: any) => f(x);

    // TWO = λfx. f( f x)
    const TWO: NUMBER = (f: uF) => (x: any) => f(f(x));

    // let's see what is
    // WHAT = λnfx. f( n f x)
    const WHAT = (n: NUMBER) => (f: uF) => (x: any) => f(n(f)(x));
    // we can see that if we pass a NUMBER to WHAT it returns something of type compatible with NUMBER

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
    const SUCC = (n: NUMBER): NUMBER => (f: uF) => (x: any) => f(n(f)(x));
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
    const f: uF = x => x + 1;
    const a = 0;
    const resultWithTWO = TWO(f)(a);
    const resultWithTwo = two(f)(a);
    it('TWO and two are extensionally equal', () => {
        expect(resultWithTWO).to.equal(resultWithTwo);
    });
    const resultWithOne = one(f)(0);
    // the result obtained applying the same function f and argument 0 to 'one' is different
    it('one and two are not extensionally equal', () => {
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

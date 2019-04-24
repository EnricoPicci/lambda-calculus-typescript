import { expect } from 'chai';

describe('How to define booleans with Lambda - Church booleans', () => {
    // a boolean can be seen as a choice between 2 things - in this way we turn what can appear a static thing
    // (a boolean is either true or false) into an action, a decision, pick the firt or the second
    // A verb is a better metaphore for a function
    // So TRUE is the action of choosing the first of 2 options
    // FALSE is the action of choosing the second
    // T = λab.a
    // F = λab.b
    const T = a => b => a;
    const F = a => b => b;
    // a and b are 2 arguments of any type, they do not have to be lambdas

    // Now let's see how we can build a binary function (i.e. a function which expects 2 parameters) which behaves
    // like AND, i.e. it returs TRUE only if both arguments are TRUE
    // The AND function has to be binary and has to accept 2 parameters then
    // AND = λpq.
    // where p and q are booleans
    // Note that λpq. is just a shorthand for λp.λq.
    //
    // So, the starting point is that AND has to have 2 boolean arguments, p and q
    // Such arguments are boolean, and therefore are binary functions, given our previous definition
    // Let's consider the first argument, p
    // p is a binary function, and therefore asks for 2 arguments to be applied to, e.g.
    // pxy
    // If p is FALSE, it will pick the second argument, as per our definition
    // So, in our AND logic, if p is FALSE, the second argument passed to p must be FALSE, so it could be something like
    // pxp
    // which means that, if p is FALSE, it picks itself, i.e. FALSE, and this is coherent with boolean AND logic
    // If, on the contrary, p is TRUE, than it chooses the first argument, i.e. it chooses x if we consider
    // pxp
    // But if p is TRUE, then the first argument x has to be TRUE or FALSE depending on the value of q
    // If q is TRUE, the first argument x has to be true, but if q is FALSE, the first argument x has to be false
    // If q is TRUE x has to be true, if q is FALSE x has to be false, this means that x is q
    // The end result is that AND is
    // AND = λpq.pqp
    const AND = p => q => p(q)(p);
    // We can easily check that AND behaves as expected
    it('TRUE AND TRUE is TRUE', () => {
        expect(AND(T)(T)).to.equal(T);
    });
    it('TRUE AND FALSE is FALSE', () => {
        expect(AND(T)(F)).to.equal(F);
    });
    it('FALSE AND TRUE is FALSE', () => {
        expect(AND(F)(F)).to.equal(F);
    });
    it('FALSE AND FALSE is FALSE', () => {
        expect(AND(F)(F)).to.equal(F);
    });

    // Also the simmetric version of the function works
    const AND_s = p => q => q(p)(q);
    // We can easily check that AND behaves as expected
    it('TRUE AND TRUE is TRUE', () => {
        expect(AND_s(T)(T)).to.equal(T);
    });
    it('TRUE AND FALSE is FALSE', () => {
        expect(AND_s(T)(F)).to.equal(F);
    });
    it('FALSE AND TRUE is FALSE', () => {
        expect(AND_s(F)(F)).to.equal(F);
    });
    it('FALSE AND FALSE is FALSE', () => {
        expect(AND_s(F)(F)).to.equal(F);
    });
});

describe('How to add types to Church booleans', () => {
    type BOOL = (x: any) => (y: any) => any;
    const T: BOOL = a => b => a;
    const F: BOOL = a => b => b;

    type BOOL_OPERATOR = (x: BOOL) => (y: BOOL) => BOOL;
    const AND: BOOL_OPERATOR = p => q => p(q)(p);

    it('TRUE AND TRUE is TRUE', () => {
        expect(AND(T)(T)).to.equal(T);
    });
    it('TRUE AND FALSE is FALSE', () => {
        expect(AND(T)(F)).to.equal(F);
    });
    it('FALSE AND TRUE is FALSE', () => {
        expect(AND(F)(F)).to.equal(F);
    });
    it('FALSE AND FALSE is FALSE', () => {
        expect(AND(F)(F)).to.equal(F);
    });
});

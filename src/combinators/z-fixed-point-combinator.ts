// http://pages.cs.wisc.edu/~horwitz/CS704-NOTES/2.LAMBDA-CALCULUS-PART2.html#rec
// Z = λf.(λx.f(λv.xxv))(λx.f(λv.xxv))

export const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));

// alternative version - I think this is not compliant with lambda calculus since Z is actually used within
// the definition of Z itself, so it is a named function, which is not allowed by Lambda calculus
// export const Z = g => v => g(Z(g))(v)

Z.toString = () => 'Z fixed-point combinator';



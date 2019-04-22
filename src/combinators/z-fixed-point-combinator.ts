// http://pages.cs.wisc.edu/~horwitz/CS704-NOTES/2.LAMBDA-CALCULUS-PART2.html#rec
// Z = λf.(λx.f(λv.xxv))(λx.f(λv.xxv))

export const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));
// alternative version
// export const Z = Z = g => v => g(Z(g))(v)

Z.toString = () => 'Z fixed-point combinator';

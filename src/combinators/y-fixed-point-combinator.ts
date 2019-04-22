// λg. (λx. g (x x)) (λx. g (x x))

export const Y = g => (x => g(x(x)))(x => g(x(x)));
Y.toString = () => 'Y fixed-point combinator';

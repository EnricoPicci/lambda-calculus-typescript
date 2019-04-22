// λg. (λx. g (x x)) (λx. g (x x))

// export const Y = g => (x => g(x(x)))(x => g(x(x)));
export function Y(g) {
    function ff(x) {
        return g(x(x));
    }
    const xx = x => g(x(x));
    return ff(xx);
}
Y.toString = () => 'Y fixed-point combinator';

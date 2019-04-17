// λnfx. f (n f x)
// λ n . λ z s . s (n z s)

export const SUCCESSOR = n => f => x => f(n(f)(x));
export const SUCCESSOR_ = n => z => s => s(n(z)(s));
SUCCESSOR.toString = () => 'Successor function';
SUCCESSOR_.toString = () => 'Successor function';

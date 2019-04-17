// λmnfx. n f (m f x)

export const PLUS = m => n => f => x => n(f)(m(f)(x));
PLUS.toString = () => 'Plus function';

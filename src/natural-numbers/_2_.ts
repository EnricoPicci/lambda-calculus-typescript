// λfx. f (f x)

export const _2_ = f => x => f(f(x));
export const TWO = _2_;
_2_.toString = () => '2 function';
TWO.toString = () => '2 function';

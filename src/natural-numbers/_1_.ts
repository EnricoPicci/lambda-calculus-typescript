// λfx. f x

export const _1_ = f => x => f(x);
export const ONE = _1_;
_1_.toString = () => '1 function';
ONE.toString = () => '1 function';

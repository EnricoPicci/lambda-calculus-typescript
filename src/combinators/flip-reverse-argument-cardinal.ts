// the flip function or reverse argument combinator aka Cardinal combinator
// lambda:  C := λfab.fba
//
export const C = f => a => b => f(b)(a);
C.toString = () => 'Cardinal combinator or flip function or reverse argument function';

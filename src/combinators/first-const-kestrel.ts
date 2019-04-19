// the first function aka constant function aka Kestrel
// lambda:  K := λab.a
//
export const K = a => b => a;
K.toString = () => 'Kestrel combinator or first function or constant function';

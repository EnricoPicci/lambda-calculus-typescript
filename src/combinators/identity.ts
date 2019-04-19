// lambda:  fa.a
// lambda:  I := λa.a
//
export const I = a => a;
I.toString = () => 'Identity combinator or identity function';

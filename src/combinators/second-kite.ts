// the second combinator aka Kite
// lambda:  KI := λab.b
//
export const KI = a => b => b;
KI.toString = () => 'Kite combinator or second function';

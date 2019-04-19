// self application combinator aka Mockingbird
// lambda:  M := λf.ff
//
export const M = f => f(f);
M.toString = () => 'Mockingbir combinator or self application function';

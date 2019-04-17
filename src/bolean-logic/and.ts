// The AND function
// lambda: AND := λpq.pqp
// explanation
// p and q are boolean (see functions T and F), so are binary functions, i.e. they expect 2 parameters
// so pqp is the application of p to q and p
// if p is False, than it selects the second parameter, i.e. p which is False, and this is consistent with the fact
// that if p is False the result of AND is false
// if p is True, than it selects the first argument, i.e. q and so if q is True it returns True
// and if q is false it returns False, again coherently with what is expected from AND
//

export const AND = p => q => p(q)(p);
AND.toString = () => 'And function';

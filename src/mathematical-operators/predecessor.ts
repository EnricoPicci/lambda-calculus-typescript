// λnfx. n (λgh. h (g f)) (λu. x) (λu. u)

export const PREDECESSOR = n => f => x => n(g => h => h(g(f)))(u => x)(u => u);
PREDECESSOR.toString = () => 'Predecessor function';

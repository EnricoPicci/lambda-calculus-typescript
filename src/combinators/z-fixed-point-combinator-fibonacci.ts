function fibonacci_(n) {
    const F = f => x => (x < 2 ? 1 : f(x - 2) + f(x - 1));
    const Z = f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v)));
    return Z(F)(n);
}

function fibonacci(n) {
    return (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))))(f => x => (x < 2 ? 1 : f(x - 2) + f(x - 1)))(n);
}

console.log(fibonacci(10));

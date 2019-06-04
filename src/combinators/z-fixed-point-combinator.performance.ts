import { performance } from 'perf_hooks';
import { Z } from './z-fixed-point-combinator';

const n = 30;

// Using named functions is much more efficient than using the Z combinator

// Calculate fibonacci with javascript named functions
const fibonacciJS = x => (x < 2 ? 1 : fibonacciJS(x - 2) + fibonacciJS(x - 1));

const t_1_0 = performance.now();
const resultJS = fibonacciJS(n);
const t_1_1 = performance.now();
console.log(
    'Call to Calculate fibonacci with javascript named functions took ' + (t_1_1 - t_1_0) + ' milliseconds.',
    resultJS,
);

// Calculate fibonacci with Z combinator
const fibonacciZ = f => x => (x < 2 ? 1 : f(x - 2) + f(x - 1));
const F = Z(fibonacciZ);

const t_2_0 = performance.now();
const resultZ = F(n);
const t_2_1 = performance.now();
console.log('Call to Calculate fibonacci with Z combinator took ' + (t_2_1 - t_2_0) + ' milliseconds.', resultZ);

const m = 50;
// Calculate factorial with javascript named functions
const fact = x => (x === 0 ? 1 : x * fact(x - 1));

const t_3_0 = performance.now();
const resultFactJS = fact(m);
const t_3_1 = performance.now();
console.log(
    'Call to Calculate factorial with javascript named functions took ' + (t_3_1 - t_3_0) + ' milliseconds.',
    resultFactJS,
);

// Calculate factorial with Z combinator
const factZ = f => x => (x === 1 ? (t => 1)(x) : (t => t * f(t - 1))(x));
const FactZ = Z(factZ);

const t_4_0 = performance.now();
const resultFactZ = FactZ(m);
const t_4_1 = performance.now();
console.log('Call to Calculate factorial with Z combinator took ' + (t_4_1 - t_4_0) + ' milliseconds.', resultFactZ);

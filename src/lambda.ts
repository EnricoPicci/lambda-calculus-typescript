// uF is the unary function type, i.e. the type of a function which receives an argument and returns something
export type uF = (x: any) => any;

// define the type lambda as a function that receives a λ as argument and returns another λ
type λ = (x: λ) => λ;

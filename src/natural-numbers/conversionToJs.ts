import { NUMBER } from './number';

export const jsNumber = (n: NUMBER, f?: (x: number) => number, z?: number) => {
    const _f = f ? f : (x: number) => x + 1;
    const _z = z ? z : 0;
    return n(_f)(_z);
};

// the only difference compared to jsNumber is that f and z parameters are not strictly typed to treat only numbers
export const jsRepresentation = (n: NUMBER, f?: (x: any) => any, z?: any) => {
    const _f = f ? f : (x: number) => x + 1;
    const _z = z ? z : 0;
    return n(_f)(_z);
};

// https://stackoverflow.com/questions/55600170/using-defined-functions-as-parameters-in-typescript

export function createBrandedFunction<T, B extends new (...a: any[]) => any>(
    fn: T,
    brand: () => B,
): T & { __brand: B } {
    return fn as any;
}

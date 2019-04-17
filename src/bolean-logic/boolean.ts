// https://stackoverflow.com/questions/55600170/using-defined-functions-as-parameters-in-typescript

function createBrandedFunction<T, B extends new (...a: any[]) => any>(fn: T, brand: () => B): T & { __brand: B } {
    return fn as any;
}

const foo = createBrandedFunction(
    function(str: string): string {
        return '';
    },
    () =>
        class A {
            private p: any;
            getP() {
                return this.p;
            }
        },
); // we just use a class with a field to make sure the brand is incompatible with anything else

const bar = createBrandedFunction(
    function(str: string): string {
        return '';
    },
    () =>
        class B {
            p: any;
        },
); // even a class with the same private is not compatible

function baz(f: typeof foo): any {}
baz(foo); // ok
// baz(bar); // err

console.log(typeof foo);
console.log(typeof bar);

// baz((s)=> "") // err

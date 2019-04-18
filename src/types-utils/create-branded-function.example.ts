// examples on how to use createBrandedFunction
// https://stackoverflow.com/questions/55600170/using-defined-functions-as-parameters-in-typescript

import { createBrandedFunction } from './create-branded-function';

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
            private p: any;
            getP() {
                return this.p;
            }
        },
); // even a class with the same private is not compatible
console.log(bar);

function baz(f: typeof foo): any {}
baz(foo); // ok
// baz(bar); // err
// baz((s)=> "") // err

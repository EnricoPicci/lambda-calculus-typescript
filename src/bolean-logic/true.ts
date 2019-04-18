// The TRUE function
// consider this
// x ? a : b
// if x is true you select a, i.e. the first of the options
//
// lambda:  TRUE := λab.a   and this is the K function
// TRUE is a function to which you pass 2 parameters and it selects the first
import { K } from '../combinators/first-const-kestrel';
import { createBrandedFunction } from '../types-utils/create-branded-function';

const T_ = K;
const _T = createBrandedFunction(
    T_,
    () =>
        class {
            private p: any;
            getP() {
                return this.p;
            }
        },
);

export const T = _T;
T.toString = () => 'True function';

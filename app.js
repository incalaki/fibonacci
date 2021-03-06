'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    // if (n < 2) {return n;}
    // if (n === 0) {
    //     return 0;
    // } else if (n === 1) {
    //     return 1;
    // }
    const value =  fib(n - 2) + fib(n - 1);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
/*
    Calculador de números da secuencia Fibonnaci, iterativo e recursivo

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

*/

const fibonacciRec = (n) => {
    if (n <= 1) return n;
    else return fibonacciRec(n - 2) + fibonacciRec(n - 1);
};

console.log(fibonacciRec(10));

const fibonnaciIte = (n) => {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};

console.log(fibonacciRec(10));

//2-Fibonanci Series 

function fibonacci(n) {
    let array = [0, 1];
    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2]);

    }

    return array;
}

console.log(fibonacci(5));

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 
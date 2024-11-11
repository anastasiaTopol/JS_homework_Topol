function pow(x,y) {
    if (Math.round(y) !== y || y < 0) {
        throw new Error('Power cant be fractal or negative number');
    }

    if (y === 0) {
        return 1;
    }

    result = x;
    for (let index = 1; index < y; index++) {
        result *= x
    }

    return result;
}

console.log(pow(2, 0), Math.pow(2, 0));
console.log(pow(2, 1), Math.pow(2, 1));
console.log(pow(2, 2), Math.pow(2, 2));
console.log(pow(2, 3), Math.pow(2, 3));
console.log(pow(2, -1), Math.pow(2, -1));
function pow(x,y) {
    return x ** y;
}

console.log(pow(2,3)); // 8

function pow(x, y) {
    if (y === 0) return 1; // любое число в степени 0 = 1

    return x * pow(x, y - 1);
}

console.log(pow(2, 3)); // 8

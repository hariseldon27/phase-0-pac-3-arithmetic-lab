function add(a,b) {
    return a + b;
};
function subtract(a,b) {
    return a - b;
};
function multiply(a,b) {
    return a * b;
};
function divide(a,b) {
    return a / b;
};
function increment(n) {
    return n += 1
}
function decrement(n) {
    return n -= 1
}
function makeInt(n) {
    let parsed = parseInt(n, 10);s
    console.log(parsed)
    console.log(typeof n)
    return parsed;
}
makeInt(10.1234)

function preserveDecimal(n) {
    let parsedDeci = parseFloat(n);
    console.log(parsedDeci)
    console.log(typeof n)
    return parsedDeci;
}
preserveDecimal(2.222)

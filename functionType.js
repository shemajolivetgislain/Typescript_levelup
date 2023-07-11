"use strict";
function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result is:" + num);
}
printResult(add(10, 20));
let combinedValues = (a, b) => number;
combinedValues = add;
console.log(combinedValues(1, 3));
// function types
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});

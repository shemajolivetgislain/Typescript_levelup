// function add(num1, num2) {
//     return num1 + num2;
// }
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
// enums in typescript
// enum role {ADMIN, READ_ONLY, AUTHOR};
// const person = {
//     name:'shema',
//     city:'kigali',
//     role: role.ADMIN
// }
// if(person.role === role.ADMIN){
//     for(const role in person){
//         console.log(role.toUpperCase());
//     }
// }
// union types
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var result = combine(10, 40);
console.log(result);
var resultStrings = combine("shema", "gislain");
console.log(resultStrings);

// function add(num1, num2) {
//     return num1 + num2;
// }
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);


enum role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name:'shema',
    city:'kigali',
    role: role.ADMIN
}
if(person.role === role.ADMIN){
    for(const role in person){
        console.log(role);
    }
}
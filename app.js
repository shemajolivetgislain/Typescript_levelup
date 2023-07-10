// function add(num1, num2) {
//     return num1 + num2;
// }
// const number1 = 5;
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["READ_ONLY"] = 1] = "READ_ONLY";
    role[role["AUTHOR"] = 2] = "AUTHOR";
})(role || (role = {}));
;
var person = {
    name: 'shema',
    city: 'kigali',
    role: role.ADMIN
};
if (person.role === role.ADMIN) {
    for (var role_1 in person) {
        console.log(role_1);
    }
}

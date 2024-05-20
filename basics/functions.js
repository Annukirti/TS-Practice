function addTwo(num) {
    //   num.toLowerCase(); // Error for type change
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toLowerCase();
}
getUpper("annu");
function signUpUser(name, email, isPaid) {
    console.log(arguments);
}
signUpUser("annu", "annu@mail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return name;
};
loginUser("annu", "annu@mail.com");
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "Provide less than 5 values";
}
console.log(getValue(6));
console.log(getValue(2));
var fruits = ["apple", "mango", "banana"];
fruits.map(function (fruit) {
    return "fruit is ".concat(fruit);
});
function voidExample() {
    console.log("hello, I am returning nothing.");
}
voidExample();
function neverExample() {
    throw new Error("hello, I will never return anything.");
}
neverExample();

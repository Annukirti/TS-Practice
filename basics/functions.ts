function addTwo(num: number) {
  //   num.toLowerCase(); // Error for type change
  return num + 2;
}
addTwo(5);

function getUpper(val: string) {
  return val.toLowerCase();
}
getUpper("annu");

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(arguments);
}

signUpUser("annu", "annu@mail.com", true);

let loginUser = (
  name: string,
  email: string,
  isPaid: boolean = false
): string => {
  return name;
};

loginUser("annu", "annu@mail.com");

function getValue(val: number): boolean | string {
  if (val > 5) {
    return true;
  }
  return "Provide less than 5 values";
}

console.log(getValue(6));
console.log(getValue(2));

const fruits = ["apple", "mango", "banana"];
fruits.map((fruit): string => {
  return `fruit is ${fruit}`;
});

function voidExample(): void {
  console.log("hello, I am returning nothing.");
}
voidExample();

function neverExample(): never {
  throw new Error("hello, I will never return anything.");
}
neverExample();

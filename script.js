let isMarried = true;

console.log(isMarried);
console.log(typeof isMarried);

let cart = null;

console.log(cart);
console.log(typeof cart);


let userName;

console.log(userName);
console.log(typeof userName);

let myNum = 123;
console.log(myNum);
console.log(typeof myNum);

let myStrNum = String(myNum);
console.log(myStrNum);
console.log(typeof myStrNum);

let a = "10";
let b = "2";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);



let a = "10";
let b = "2";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


let a = Number("10sdf");
let b = Number("hello");
let c = Number("   10   ");

console.log(a);
console.log(b);
console.log(c);


let a = Boolean("1");
let b = Boolean(1);
let c = Boolean("hello");
let d = Boolean("");
let e = Boolean("0");
let f = Boolean(0);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


let a = 20;
let b = 10;

console.log(a > b); // true
console.log(a >= b); // true
console.log(a < b); // false
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true

let a = "10";
let b = 10;

console.log(a == b); // true
console.log(a === b); // false
console.log(a !== b); // true


let isMarried = true;

if (isMarried === true) {
  console.log("Я не буду знакомиться");
}

let isMarried = true;

if (isMarried) {
  console.log("Я не буду с Вами знакомиться");
}

let isMarried = false;

if (isMarried) {
  console.log("Я не буду с Вами знакомиться");
} else {
  console.log("Привет, меня зовут Иван");
}

let age = 101;

if (age < 3) {
  console.log("Здравствуй, малыш!");
} else if (age < 18) {
  console.log("Привет!");
} else if (age < 100) {
  console.log("Здравствуйте!");
} else {
  console.log("Какой необычный возраст!");
}


let password = false;

password ? console.log("Доступ открыт") : console.log("Доступ закрыт");

let password = false;

password ? console.log("Доступ открыт") : console.log("Доступ закрыт");








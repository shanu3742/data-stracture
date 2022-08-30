/**
 * swap two number
 * using a third variable
 */

let numberOne = 100;
let numberTwo = 200;
let temp = numberOne;
numberOne = numberTwo;
numberTwo = temp;

console.log(numberOne, numberTwo);

/**
 * swap two number without using
 * third variable
 * by adding  two number
 */
let num1 = 10;
let num2 = 20;

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(num1, num2);

/**
 * swap two number without using
 * third variable
 * array distructuring
 *
 */
let number1 = 100;
let number2 = 200;
[number1, number2] = [number2, number1];
console.log(number1);
console.log(number2);

/**
 * swap two number without using
 * third variable
 * multiplay two number
 *
 */
let digitOne = 50;
let digitTwo = 70;
digitOne = digitOne * digitTwo;
digitTwo = digitOne / digitTwo;
digitOne = digitOne / digitTwo;

console.log(digitOne);
console.log(digitTwo);

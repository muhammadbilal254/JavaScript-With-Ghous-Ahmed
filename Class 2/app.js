// Chapter 3
// Variable for Numbers 

// alert("Class 3");

console.log("Class 3")
// to show the msg on console


var weight = 150;

// We perform all arithmetic operator in var number 


var marks1 = 76
var marks2 = 45;

var total = marks1 + marks2
console.log(total);

// add operator with string and number

var num = 123;
var str = "231";

var add = num + str
console.log(add); // its concate with number and string

// other operator will work properly

console.log(num - str);
console.log(num * str);
console.log(num / str);
console.log(num % str);

// subtract two string

console.log("123" - "1"); // its work corrctly
console.log("123" * "2"); // its work corrctly

var abc;
console.log(abc); //undefined

// console.log(xyz);

//* Note: Undefined and Not defined are two different things

/*

In conclusion, 
"undefined" and "not defined" are two different values in JavaScript. 
"undefined" indicates that a variable has been declared but not given a value,
 while "not defined" indicates that a variable does not exist.

 */

// -----------------------Chapter 4 --------------------------------------------//


// Legal and Illegal Variable

// 1. Variable are case sensitive
var name = "Bilal";
var Name = 123;
// both are different

// 2. Not include space and other special character except underscore (_)

// 3. Not start with number, but at the center and end of the variable we used number
// 11num=====X
// abc1;

// 4.use camelCase to declare variable, it's a good practice
var myName;
var myInstitute

// 5. Use Snakecase which include _
var snake_case;

// ----------------Chapter 5 -----------------------------------------------------//

var n1 = 2;
var n2 = 5;

console.log("Add " + n1 + n2);
console.log("subtraction " + (n1 - n2));
// NaN : error Not a Number
console.log("Multiplication " + n1 * n2);
console.log("Division " + n1 / n2);
console.log("Modulo " + n1 % n2);


// ----------------Chapter 6 -----------------------------------------------------//

var a = 5;
a++; // a = a + 1
a-- // a = a - 1

console.log(a);
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
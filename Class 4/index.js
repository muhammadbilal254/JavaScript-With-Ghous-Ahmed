// Prompts

// document.write("<h1>Welcome to Our Resturent </h1>");

// var food = prompt("What's Your order");
// console.log(food);

// document.write("<h1> Login Form </h1>");

// var username = prompt("Enter your email or username");
// var password = prompt("Enter your password");

// document.write("username: " + username + "<br />");
// document.write("password: " + password);

// Calculator
// document.write("<h1>Casio Calculator</h1>");
// convert string to number we use +operator
// var num1 = +prompt("Number 1");
// var num2 = +prompt("Number 2");

// document.write("Addition RESULT: " + (num1 + num2) + "<br />");
// document.write("Subtraction RESULT: " + (num1 - num2));

// -------------------------------------------------------- >
// If Statement

// var salary = +prompt("Enter Your Salary: ");

// if (salary > 10000) {
//   console.log("Tax is allowed");
// }

// if (salary < 10000) {
//   console.log("Tax is not allowed");
// }

// if (true) {
//   console.log("me chalu ga");
// }

// if (false) {
//   console.log("me nhi chalu ga");
// }

// Calculator
document.write("<h1>Casio Calculator</h1>");
// convert string to number we use +operator
var num1 = +prompt("Number 1");
var oper = prompt("Enter Operator");
var num2 = +prompt("Number 2");
var result;

if (oper == "+") {
  result = num1 + num2;
}

if (oper == "-") {
  result = num1 - num2;
}

if (oper == "*") {
  result = num1 * num2;
}

if (oper == "/") {
  result = num1 / num2;
}

alert(result);

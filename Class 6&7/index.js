// Arrays
// used to store the collection of value

// var names = ["ghous", "ahmed", "ali"];

// console.log(names);
// to select single value of an array
// console.log(names[0]);
// console.log(names[1]);

// alert("Welcome " + names[0]);

// console.log(names.length);

// the second method to define array

// let arrObj = new Array("123", 12, 31);
// console.log(arrObj);

// add element is array

// var cities = ["karachi"];

// cities[1] = "lahore";
// cities[2] = "Multan";
// cities[cities.length] = "Islamabad";
// cities[cities.length] = "Hyderabad";

// console.log(cities);
// console.log("Total ", cities.length);

// creata const variable which store array

// const fruits = ["apple", "mango", "banana"];

// fruits[fruits.length] = "kiwi";
// fruits[0] = "orange";
// in this example, we observe that when we define contant array, we can also add update value to this array
// console.log(fruits);

// -----------------------------------------------------
// Adding and removing elements

// var fruits = ["apple", "mango", "banana"];
// console.log("Original array ", fruits);

// add or delete from the last element
// push and pop

// fruits.pop(); //delete last element

// fruits.push("kiwi", "orange", "lemon"); //insert at last element

// insert from first and delete from first
// shift and unshift

// fruits.shift(); //delete first element
// fruits.unshift("tomato", "watermelon", "peach"); //delete first element

// console.log(fruits);

// -----------------------------------------------------------------

// slice and splice

// slice is just used to copy the value

// var students = ["bilal", "noman", "ahmed", "usama", "owais"];

// console.log("original students", students);

// // slice(starting index, ending index + 1)
// var copyStudents = students.slice(0, 5);

// console.log(copyStudents);

var students = ["bilal", "noman", "ahmed", "usama", "owais"];
// splice is used to add update delete value from the middle of he array
// students.splice(0, 1); // to delete first element
// students.splice(4, 1); // to delete last element
students.splice(1, 0, "rayyan", "ayan"); // to add two new elements after 1st element

console.log(students);

// pop
// push

// shift
// unshift

// splice
// splice

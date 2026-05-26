/*
* Variables, Data Types, and Typing
 */
let wordData="Word List";
//left side of = is declaration
// = does not mean "equal to", but is referencing
console.log (wordData);

let subTotal = 100;
let tax = 0.07;
let totalWithTax = tax + subTotal;

//Moving on to Data Types in Video

/*
 5 data types (used to construct more complex types)
 Boolean-2 values, true or false
 Nol-set to nothing by user
 undefined-set to nothing by javascript itself
 number-all numbers which math can be performed
 strings-alpha numeric characters in code, usually encapsilated by ""

 Composite types-types that are comprised of several other types
 In JavaScript a single composite type is an object
 to define an object in JavaScript we use a variable
 ... */

let obj = {
    key1: "value 1",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "value of inner object",
    }
};

console.log(obj.obj2.obj2Key1);

//Typing systems-To handle data types, 2 primary characterisitics are static or dynamic
let variable = string = "string"
// JavaScript is dynamic, meaning the type of value is determined while the program runs.

let var1= "2"
let var2 = 5;
let result = var1 + var2;
// Showed result as 25
console.log(result);
// a strong language would fail, but a weak language will attempt to convert

let add = 1 + 2;
let sub = 2 - 2
let mult = 2*4;
let division = 4 / 2;
let mod = 5 % 2;

let string = "String 1 " + "String 2";

console.log(string);
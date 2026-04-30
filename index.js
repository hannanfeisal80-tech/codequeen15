console.log("My name is Hannan");

// Variables
// Declaring a variables using the following words var,let, or const keywords

// var is function-scoped and can be redeclared and updated
var name ="Hannan";
console.log(name);
name = "Hannan Feisal"
console.log(name);

//let is block-scoped and can be updated but not redeclared
let age=25;
console.log(age);
age=20;
console.log("My age has changed because i am just a girl",age);


// const is block-scoped and cannot be updated or redeclared
const country="Uganda";
console.log(country);
// country="Kenya";  this will remain an error because const cannot be reassigned

// Data Types
// JavaScript has several data types including:
// 1.String
let greeting="Hello, How are you?";
console.log(greeting);
console.log(typeof greeting);

// 2.Number
let x=10;
let y="12";
console.log(x);
console.log(y)
console.log(typeof x);
console.log(typeof y);

// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol(includes symbols like +,-,*) like math expressions
// Explanation of Symbol data types
// Mathematical Operations
let a = 5;
let b = 3;
// console.log(a+b);Addition
// console.log(a-b);Subtraction
// console.log(a*b);Multiplication
// console.log(a/b);Divison
// console.log(a%b);Modulus
// console.log(a**b);Exponentiation
// 7.Object

// Conditions in JavaScript
// if statement
// Defination of if statement
let condition=true;
let condition1=false
let condition2=false;
let condition3=true;
if(condition)

if(condition){
  // code to be executed if condition is true
}
// if-else statement
// definition of if-else statement
if(condition){
  // code to be executed if condition is true
} else{
   // code to be executed if condition is false
}

// else-if statement
// definition of else-if statement
if(condition1){
  // code to be executed if condition1 is true
} else if(condition2){
  // code to be executed if condition2 is true
}else{
  // code to be executed if both condition1 and condition2 are false
  // 
}

// Practice examples
let mark=50;

if(mark > 69){
  console.log("very good you have passed the exam")
}

if(mark >= 70){
  console.log("You have passed the exam")
}else{
  console.log("You have failed the exam")
}
// create a grading for A level marks

// Comparison Operators
// 1.Equal to(==)
// 2. Not equal to (!=)
// 3. Strict equal to(===)
// 4.Strict not equal to(!==)
// 5.Greater than(>)
// 6.Less than(<)
// 7.Greater than or equal to(>=)
// 8.Less than or equal to(<=)

// Arrays 
// An Array is a data structure that can hold multiple values at once.It is defined using lists
// [] an empty array

["apples","oranges","watermelon","grapes"]
[1,2,3,4,5]
let fruits=["apples","oranges","watermelon","grapes"];
console.log(fruits);
console.log(fruits[2])

let mixedArray = ["Hannan", 25, "Uganda",true,null,undefined,{name:"John"}];
console.log(mixedArray);
console.log(mixedArray=[6]);

// Objects
// {} an empty object
let person = {
  name:"Alex",
  age:30,
  country:"Uganda",
  isStudent:"false",
  Hobbies:["coding","traveling"],
  address:{
    street:"123 main st",
    city:"Kampala",
    country:"Uganda"
  }
}
console.log(person);
console.log(person["name"]); //accessing the name property
console.log(person.Hobbies[1]) //accessing the second hobby

// work from the LMS
const itemInput=document.getElementById('item');
const todoTimeInput =document.getElementById('time');
const saveBtn =document.getElementById('save');
const tableBody =document.getElementById('tableBody');

// Pick values to a given element
const getElementValue=(element)=>{
  return element.value;
}

// on button click
saveBtn.addEventListener("click",(event)=>{
  event.preventDefault();

  // pick value of the task name
  const itemvalue=getElementValue(itemInput);
  const todoTimeVale=getElementValue(todoTimeInput);

  const tableRow=document.createElement("tr");

  const ItemId=document.createElement("td");

  ItemId.innerHTML=itemvalue;
  tableRow.appendChild(itemId)

  const todoTimeId=document.createElement("td");
  toDoTimeTd.innerHTML=toDoTimeTdValue;
  tableRow.appendChild(toDoTimeid)
  
  tableBody.appendChild(tableRow)
})


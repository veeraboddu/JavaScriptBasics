// Webstorm tool use to implement javascript
//https://www.youtube.com/watch?v=PkZNo7MFNFg
// Learn JavaScript - Full Course for Beginners
console.info("welcome to javascript")

// in- line comments
var number =5;
/*
multi line comments
multi line comments
 */
// Data Type
/*
undefined
null
boolean
string
number
object
*/
// Declare a variable
var myanme ="veera";
myname =8 ; // you can assign any data type values
let ourName = "againveera" ;
const pi =3.14  // it never change
var a;
var b=10;
a=20;
a = a+b;
b= a-b;
a = a-b;
console.log(a);
console.log(b);

// variable names and method names are case sensitive Caps lower case are matters.
//initialise and assign the values
var ABB;
abb ="teststring";
console.log(abb);
// we can do all the mathematical operation by using java script
var add = 10+30;
var sub = 30 -10;
var mul = 10 * 8;
var quotent = 4 / 2;
var rem = 10%3;
console.log(add);
console.log(sub);
console.log(mul);
console.log(rem);
console.log(add);
// increamenting value
var myvar =10;
myvar = myvar +1;
myvar++;
console.log(myvar);
// decreamenting
myvar = myvar -1;
myvar--;
console.log(myvar);
var myStr = "My string in javascritp";
// how to delcare escape char inside the string
var mystr = "My \"string \" declar \"escape\" character"
console.log(mystr);
var mystr = 'My "string " declar "escape" character'
console.log(mystr);
var mystr = `My "string " declar "escape" character`
console.log(mystr);
// find length of the string
console.log(mystr.length);
// bracket notation get the specific character
console.log(mystr[0]);
// string is immutable
var mystrvariable = "Uy string";
mystrvariable[0]='M';   // you cannot assign because it is a immutable if you want you can assign the string val
mystrvariable = "new my string"
console.log(mystrvariable);
// find the last letter in the given string
 var findlandlet = mystrvariable[mystrvariable.length -1];
console.log(findlandlet);

// function declartion and execute

function addvariable( a,  b) {
 return a+b;
}
console.log(addvariable("fist","second"));
console.log(addvariable(20,30));

// Declare array
var myArray = ["firstelement", "second"];
// Declare multidimentional array
var muldimarray = [["firstelement", 10],["secondelement", 20],["thirdelement", 20]];
var tem = myArray.length-1;
console.log(tem);

while (tem>=0){
    console.log(myArray[tem]);
    tem = tem-1;
}

// append the data by using the push function
var myarraypush =["one","two","three","four"];
myarraypush.push("five");
myarraypush.push("six");
myarraypush.pop();
myarraypush.shift();
myarraypush.shift();// pop remove the end of the array element shift remove the starting index of the element.
myarraypush.unshift("severn");// push adding the element to the end of the array unshift add the begining of ary
console.log(myarraypush);

function adding(a,b) {
    console.log(a+b);
}
function subst(a,b) {
    console.log(a-b);
}
function multi(a,b) {
    console.log(a*b);
}
function divi(a,b) {
    return a/b;
}
adding(10,20);
subst(20,10);
multi(10,20);
console.log(divi(4,2));
// local and global variable declaration

//example  given array add an element and remove first elemnent
function addarrelement(arr, item) {
arr.push(item);
return arr.shift();
}
var arr =[1,2,3,4,5];
console.log("Before "+ JSON.stringify(arr));
addarrelement(arr,6);
console.log("After "+ JSON.stringify(arr));

// if statement
function booleanvailation(status) {
    if (status){
        return "condition is satisfies";
    }
    if (!status){
        return "condition is NOT satisfies";
    }
}
console.log(booleanvailation(true));
console.log(booleanvailation(false));

// comparaty operators
// ==  // it will do the type coversition
// ===  // it will not do the type conversion it is called as a strict equal operation.
// != // not equal operator , it will do the conversion
// !-- // strict inequality operator
// <= , < , >, >=,
// && || logical operators
/*
if(){ }
else if { }
else{ }
 */
//switch statement
// 1:40 mins lesson done.
/*
switch(val){
case "first":
  status ="first";
  break;
case "second":
  status ="first";
  break;
case "Third":
  status ="first";
  break;
case 4:
  status ="first";
  break;
case 5:
  status ="first";
  break;
}
 */

function mathfunctions() {

    return Math.round(Math.sqrt(a)+Math.sqrt(b),2);

}
console.log("Math funcit return "+mathfunctions(2,2));

// Java script objects
var testobjjs = {
    "propOne": "valueone",
    "proptwo": "valuetow",
    "propthree": "valuethree",
    "propfour": "valuefour"
};
var testobj = testobjjs;
var testobjretrive = testobjjs.propfour;
var testobjretrive2 = testobjjs['propOne'];

console.log(testobjretrive);
console.log(testobjretrive2);
// you can update the property you add the new property to the obj , delete
testobjjs.propfive = "valuefive";
delete testobjjs.propOne;

// we can add object inside the array
// while loop
var myarraywhile=[];
var i =0;
while (i < 5){
    myarraywhile.push(i);
    i++;
}
console.log(myarraywhile);

var j =0;
var myarrayfor = [];
for(var j=0;j<5;j++){
    myarrayfor.push(j);
}
console.log(myarrayfor);

// nested loop
var multidimension =[[1,2],[3,4],[5,6,7]];

for(var i=0;i<multidimension.length;i++){
    for(var j=0;j<multidimension[i].length;j++){
        console.log(multidimension[i][j]);
    }
}
// do.... while loop
// generate random fractions //
console.log(Math.random());  // it never be one ie : less than 0
console.log(Math.floor(Math.random() *10)); // between 1 - 9
console.log(Math.floor(Math.random() *10)); // between 1 - 9
console.log(Math.floor(Math.random() *10)); // between 1 - 9
// convert string value to integer val
function coverstInt(num) {
    return parseInt(num);
}
console.log(coverstInt("56"));
// coverting into binary number to base 2 format
function coverstInt2(num) {
    return parseInt(num,2);
}
console.log(coverstInt2(1010));

//turnary operator
// condition ? statement-if-true : statement-if-false;
function checkSing(num) {
return num > 0? "positive" : num < 0? "negative " : "zero";
}
console.log(checkSing(-1));

// if you want to declare the the variables inside the block use the 'let' instead of var will consider whole block
function testLetVar() {
 var i = "In side the function"
    if(true){
        var i = "In side the condition"
        console.log("In "+i);
    }
    console.log("In "+i);
}
testLetVar();

function testLetVar1() {
    let i = "In side the function"
    if(true){
        let i = "In side the condition"
        console.log("In "+i);
    }
    console.log("out "+i);
}
testLetVar1();

//const key word we can not reassign the values  and variable name should be CAPS so it is notifies Constant val

// Object.freeze(MATH_CONST)  we can not change the object value
function freezeobj() {
"use strict";
const MATH_CONST = {
    PI:3.14
}
}
//Object.freeze(MATH_CONST);

// try {} catch (ex){}
// Date function
console.log(Date());
// concatinating two array
function myconcat(arr1,arr2){
    return arr1.concat(arr2);
}
console.log(myconcat([1,2],[3,4,5]));

// passing arguments
const person ={
    name : "meghana",
    age : 5
};
const getting = `hello, my name is ${person.name}! I am ${person.age} years old `;
console.log(getting);

const createperson = (name,age,gender) => ({name,age,gender});
console.log(createperson("meghana",5, 'Female'))

// class
class book{
    constructor(author) {
        this._author = author;  // private variable
    }
    //getter
    get writer(){
        return this._author
    }
    //setter
    set writer(udpatedAuthor){
        this._author = udpatedAuthor;
    }
}

// example
function makeclass() {
    class First{
        constructor(temp) {
            this._temp = 98.5;
        }
    }
}
const thermo = makeclass();
const theromst = new FirstClass(98);

//import {capitalizeString } from "./string_function"
// another js file path
// js interview qa
var global = "My global variable"

function personalDetails() {
   let name = 'veera'
    if (name == 'veera'){
        let desig = "QA Automation"
        console.log(desig)
    }
    console.log(name)
    console.log(global)
  //  console.log(desig)

}
personalDetails()
console.log(global)

// How to create a private variable in JS

function secret() {
    var sample = "secret value"
    return function() {
        return  sample
    }
}
var test = secret()
console.log(secret())
//console.log(test)

console.log(typeof 1)   // typeof 1 gives you number typeof typeof 1  return string

//---tricky question
console.log(2+'2')  // answer 22
console.log(2-'2') // answer 0

let arrVal = [1,2,2,3]
console.log(new Set(arrVal))   // remove the duplicate elements
console.log([...new Set(arrVal)])// convert the Set object into array

let func = function () {

    {
        let l = 'let'
        var v = 'var'
    }
    console.log(v)      // var is global
   // console.log(l)   // let with in the block
}
func()
// next question
console.log(5 < 6 <7)  // true  5 < 6  true < 7 ie 1 < 7 = true
console.log(7>6>5) //false 7>6 true>5 ie 1>5 = false
// next
let x = function () {
    return    {   // it return the value  if we keep { in the next line we will get undefined.
        message:'hi'
    }
}
console.log(x())

// how to add a property to the object
let profile = {
    name : 'veera'
};
profile.age = 30   // we can add the property to the object
console.log(profile)
profile.desig = 'Software'
Object.freeze(profile)  // not allow them to add new property but now modify the property
//Object.seal(profile)   // seal will not  allow to modify or add new property
profile.lastname = 'boddu'
console.log(profile)

// how to modify only ony property

let profile1 = {
    name:'meghana',
};

Object.defineProperty(profile1,'age',{
    value:3,
    writale:false
})

profile1.name = 'newValue' // it allow to modify
//profile1.age = 5; // it will not allow to modify writable

// largest numbe
console.log(Math.max())  // -infinity because it will take least value compart the given value
console.log(Math.max(123,9,100,101))  // max is123

console.log(Math.min(123,9,100,101))  // max is123
console.log(Math.floor(Math.random()*5))
// iterate the json object in js  sinle
var myJsonobj = {id:112345,name:'veera',desig:'software',location:'sanbruno',state:'CA'}
console.log(myJsonobj.id);
console.log((myJsonobj['name']));
console.log((myJsonobj['desig']));

console.log('-----------------------');

// difference between Var and let .. Var is functional scope , let is block scope. let is introduced newly where as var is very old. 
// differebce between == and ===  1.both are comparision operators. 2. == it will compare value only 3. === it will compare value & type
// difference between let and const 1. let use to define the variable 2. const used to define constant values
// once assign the value to let we can reassign value , where as const we can not reassign the value. 
const a = [1,2,3]
a.push(4)  // we can append , but we cannot reassign
// difference between undefined and null 1. both represent empty value 2. if you define a variable but not assign any thing is undefined
// 3. if you want to make variable value to null we will assign the null value. 
// typeof(undefined) => undefined , but typeof(null) => Object

// use of arrow function is also calle fat arrow

const profile ={
 fistname :''
 lastname :''
 setName:function(name){
 let splitname = function(n){
 let nameArray = n.split(' ');
 this.fistname = nameArray[0]
  this.lastnme = nameArray[1]
}
splitName(name);
}
}
profile.setName('veera Boddu')
console.log(fistname);


// fat arrow or arrow function()
"use strict";   // use the latest functionality and throw the error
var getA = function (a) {
return a;
}
console.log(getA(100))

var getArrowA = a => a;
console.log(getArrowA(200))

// we are passing the argument
//let square = a => a*a;
let square = (a) => { return a * a }  // correct syntax
console.log(square(2));

// without passing the argument
var aa = 4;
var getSquere = () => {return aa*aa}   // we can put () or _ underscore
console.log(getSquere());

var xyz = (...nvar) => {
    console.log(nvar[2])
};
console.log(xyz(1,2,3,45))






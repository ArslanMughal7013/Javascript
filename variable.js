/*  Data Types
undefined, null, boolean, string, symbol, number, and object  */

// --------- Var Start----------------


var a;
var b=2;

// document.write(a)

a=7;
b=a;

// document.write(a)
// document.write(b)



// Initialize these three variables
var a=5;
var b=10;
var c="I am a";


a=a+1;
b=b+5;
c=c+" String";

// document.write(a)
// document.write(b)
// document.write(c)


// -----------------------
var percent;
percent= 11%3;
// document.write(percent)


// ---------String Length Check

var firstNameLength=10;
var firstName= "Ada";

// firstNameLength = firstName.length
// firstNameLength= firstName[1]
firstNameLength = firstName.length-1


// document.write(firstNameLength)
// document.write(firstNameLength)

// ----------------------------
// Word Game

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result= "";
    result += "This "+ myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
// console.log(wordBlanks("dogs","big", "ran", "quickly"));
// console.log(wordBlanks("bike","slow", "flew", "slowly"));

// --------------------------------------
// stores multiple values with arrays
var ourArray = [50,60,70];
var ourData= ourArray[0];

// document.write(ourData)

var myArray = [50,60,70];

// Arrays ka under Arrays ko Nested Array kehty hai

// Modify Array with index
myArray[1]= 30;

// document.write(myArray)

// Access multiplay arrays

var myArrays = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData= myArrays[1][2]

// document.write(myData)

// -----Add Arrays using Push tag
var ourArrays=['Ali',25,"ji"]
// Add Arrays using push tag from end
// ourArrays.push(["ASDF", 47])


// Remove Arrays using pop tag from end
// ourArrays.pop();

// Remove arrays using shift tag form start
ourArrays.shift();

// Add Arrays using unshift tag from start
ourArrays.unshift(["hasnat"])



document.write(ourArrays)


// Function call work data show

function ourfunctionwithargs(){
   document.write("This is funtion")
}
ourfunctionwithargs()
// --------------------------
function ourfunctionwitharg(a,b){
    document.write(a-b)
 }
 ourfunctionwitharg(10,5)


// -Global function call
var myGlobal= 10;

function fun1(){
   oopsGlobal = 15;
}

function fun2(){
    var output = " ";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal; " + myGlobal
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal
    }
    document.write(output)
}
// fun1();
// fun2();

// ---------------------
// local scope and funtion


function localscope(){
    var myvar = 30;
   document.write(myvar)
}

localscope()

// Global vs Local scope in funtion
var outerWear = "T-Shirt"

function myOutfit(){
    var outerWear = "Sweater"
    return outerWear
}
document.write(myOutfit());

// document.write(outerWear)     "T-Shirt"

// ---Return a value form function of return

function minusSeven(num){
    return num-7
}
document.write(minusSeven(10))

// ---------------------------

var changed = 0;
function change(num){
    return (num+5)/3
}
changed=change(10)
document.write(changed)

// ------------------------------
// 

function nextInLine(arr,item){
    return item;
}

var testArr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6))
testArr.push(6)
console.log("After: " + JSON.stringify(testArr))

// ------------------------------------
// Working with boolean true false if else condition
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "Yes, it is true"
    }
    return "No, it's false"
}

console.log(ourTrueOrFalse(true))
// ---------------------
// Checking condition with boolean equal or not
function testEqual(val){
    if(val==12){
        return "YES, value equal"
    }
    return "No, Not Equal"
}
console.log(testEqual(10))
// -----------------------------
// check conditon greater than if else
function greaterThenValue(val){
    if(val>100){
        return "Over 100"
    }
    if(val>10){
        return "Over 10"
    }
    return "10 or under"
}

console.log(greaterThenValue(10))

// ------------------------------
// under if else condition also under condition
function testLogicalAnd(val){
    if(val<=50){
        if(val>=25){
            return "YES"
        }
    }
    return "NO"
}
console.log(testLogicalAnd(10))


// -----------------------------------
// Test not Equal in boolean
function testNotEqual(val){
      if(val != 99){
        return "Not Equal"
      }
      return "Equal"
}

console.log(testNotEqual(10))
// ------------------------------






// -----------------------------------------

var myName = "ABCD"
myName = 81

var first, second;
first= 45;

// dobara sa variable ko declare kr sakhty hai

// document.write(myName)  
// document.write(first)


// --------- Var End----------------
// --------- Let Start----------------

let LastName = "ASDF"
LastName= "QWER"
// Let LastName="asdf"   Dobara Declare ni kr sakhty

// dobara sa variable ko declare (Nhi) kr sakhty hai 
// value overwrite hu sakhti hai

// document.write(LastName)

// --------- Let End----------------
// --------- Const Start----------------

const Second = "Hello"
Second = "World"

// const ma dobara value ko declare or define ni kr sakhty

// document.write(Second)


// --------- Const End----------------













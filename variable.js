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
ourArrays.push(["ASDF", 47])

document.write(ourArrays)






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













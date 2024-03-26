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
// Test And Operator with logic
function testLogicAnd(val){
    if( val <=50 && val >=25  ){
        return "Yes"

    }
    return "No"
}

console.log(testLogicAnd(20))
// ------------------------------
function testLogicAndd(val){
    if( val >=100 && val <=150 ){
        return "Yes"
    }
    return "No"
}
console.log(testLogicAndd(110))
// ---------------------------
// Test OR operator with login
function testORLogic(val){
    if(val <10 || val >20){
        return "Outside No"
    }
    return "Inside Yes"
}
console.log(testORLogic(15))
// ------------------------------
function testORLogicc(val){
    if(val >15 || val <10){
        return "Outside No"
    }
    return "Inside Yes"
}
console.log(testORLogicc(14))
// ----------------------------------
// if else statement
function TestElseCode(val){
    if(val < 5){
        return "Less than 5 "
    } else if (val < 15){
        return "Less than 15"
    } else{
        return "Greater than or equal to 10"
    }

}

console.log(TestElseCode(12))
// ------------------------------------
// chained if/else statement to fulfill the following conditions;
function TestChainedElseCode(val){
    if(val < 5){
        return "Tiny"
    }else if(val < 10){
        return "Small"
    }else if(val < 15){
        return "Medium"
    }else if(val < 20){
        return "Large"
    }else{
        return "Huge"
    }

}

console.log(TestChainedElseCode(100))
// -------------------------------------
var names = ["Hole-in-one!", "Eagle", " Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore(par, strokes){
     if(strokes == 1){
        return names[0]
     }else if(strokes <= par -2){
        return names[1]
     }else if(strokes == par -1){
        return names[2]
     }else if(strokes == par){
        return names[3]
     }else if(strokes == par + 1){
        return names[4]
     }else if(strokes == par +2){
        return names[5]
     }else if(strokes >= par+3){
        return "Go Home"
     }
}
console.log(golfScore(4,2))
// ------------------------------------
// Switch statement start
function caseInSwitch(val){
    var answer = "";
    switch (val){
        case 1:
          answer = "alpha";
          break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer
}
console.log(caseInSwitch(2))
// ------------------------------------------------------
function switchOfStuff(val){
    var answer= "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"))
// ----------------------------------------
function sequentialSized(val){
    var answer = " ";
    switch(val){
        case 1: case 2: case 3:
            answer = "Low";
            break;
        case 4: case 5: case 6:
                answer = "Mideum";
                break;
        case 7: case 8: case 9:
                    answer = "High";
                    break;
    }
    return answer
}
console.log(sequentialSized(1))
// ------------------------------------
function SwitchWithConditon(age){
    var age = "20";
    switch(true){
        case (age <=5):  age = "less than 5";
        break;
        case (age >= 15): age = "Geater than 15";
        break;
        default: console.log("enter the valid date");

    }
    return age;
}
console.log(SwitchWithConditon())
// ----------------------------
function SwitchDey(){
    let date;
    switch(new Date().getDay()){
        default: date="Looking forward to the weekend";
        case 6:  date="today is " + new Date().getDate();
        break;
        case 0: date="Tomorrow is saturday";
        break;
    }
    return date;
}
console.log(SwitchDey())
// ---------------------------------
var ages= 18;
switch(true){
    case (ages <=17): console.log("your are not eligibale");
    break;
    case (ages >=18): console.log("your are eligible");
    break;
    default: console.log("please enter your valid age")
}
// ----------------------------------------------
function golfScores(par, stroke){
    var name = ["Hole-in-one!", "Eagle", " Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]

     switch(true){
        case (stroke == 1):  return name[0];
        break;
        case (stroke <= par -1): return name[1];
        break;
        case (stroke == par -1): return name[2];
        break;
        case (stroke == par): return name[3];
        break;
        case (stroke == par +1): return name[4];
        break;
        case (stroke == par +2): return name[5];
        break;
        case (stroke >= par +3): return name[6];
        break;
     }
}
console.log(golfScores(2,5))
















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













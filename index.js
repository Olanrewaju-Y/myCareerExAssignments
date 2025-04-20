// WEEK THREE ASSIGNMENTS

// CONCENCATE
const name = "Olanrewaju";
const age = 35;
const nationality = "Nigeria";

console.log(
  "My name is " +
    name +
    ", i'm a" +
    " " +
    age +
    "years old from " +
    nationality +
    "."
);

// UPPERCASING AND LOWERCASING

const favQoute = "Time is Money";

console.log(favQoute.toUpperCase());
console.log(favQoute.toLowerCase());

// REVERSE A WORD

const sex = "female";
console.log(sex.split("").reverse().join(""));

// CAL. TOTAL AMOUNT AND DISPLAY

const garriPrice = 100;
const water = 50;
const sugar = 50;

console.log("The G.Total = " + (garriPrice + water + sugar) + "naira");

//5.  TEST SCORES AVERAGE

const studentName = "James";
const eng = 40;
const math = 75;
const biology = 55;
const chemistry = 80;
const geography = 85;

console.log(
  "The average score of " +
    studentName +
    " an ss3 Student is " +
    (eng + math + biology + chemistry + geography) +
    "points"
);

//6.  ARRAY

let favFood = ["Bread", "dodo", "Rice", "Yam", "Beans"];

console.log(favFood[0] + " and " + favFood[4] + " is my best food combination");

//7.  ADD ITEMS TO FIRST AND LAST

// favFood.unshift("amala")
favFood = ["amala", ...favFood];

// favFood.push("Mango")
favFood = [...favFood, "Mango"];

console.log(favFood);
// console.log(favFood.length);

//8. jssOne, jssTwo, jssThree ARRAY

const jssOne = [
  "james",
  "kola",
  "john",
  "Rashida",
  "Kudi",
  "bukki",
  "Debby",
  "Tope",
  "Ope",
  "Ugo",
];

const jssTwo = [
  "james",
  "kola",
  "john",
  "Rashida",
  "Kudi",
  "bukki",
  "Debby",
  "Tope",
  "Ope",
  "Ugo",
];

const jssThree = [
  "james",
  "kola",
  "john",
  "Rashida",
  "Kudi",
  "bukki",
  "Debby",
  "Tope",
  "Ope",
  "Ugo",
];

console.log(jssOne);
console.log(jssTwo);
console.log(jssThree);



// WEEK 4 ASSIGNMENTS


//1. FUNCTION score >= 180

function scoreResult(score) {
  if (score >= 180) {
    console.log("Passed!");
  } else {
    console.log("Failed!");
  }
}

scoreResult(190);

//2.  FUNCTION age

function ageResult(age) {
  if (age >= 18) {
    console.log("You are Eligible to Vote!");
  } else {
    console.log("NOT Eligible!");
  }
}

ageResult(17);

//2.  FUNCTION name, score

function nameNScore(name, score) {
  if (score >= 90) {
    console.log(name + ": " + "Excellent!");
  } else if (score >= 75) {
    console.log(name + ": " + "Good");
  } else if (score >= 50) {
    console.log(name + ": " + "Average");
  } else {
    console.log(name + ": " + "Fail!");
  }
}

nameNScore("Tolu", 0);

//4. BOOLEAN FUNCTION

function booleanFunction(hasID, isAbove18) {
  if (hasID && isAbove18 === true) {
    console.log("Access granted!");
  } else {
    console.log("Access Denied!");
  }
}

booleanFunction(true, true);

//5. FOR LOOP

const studentScore = [10, 51, 90, 59, 75, 40, 60, 100];

for (let a = 0; a < studentScore.length; a++) {
  //  console.log(studentScore[a]);
  //  const sScore = studentScore[a];
  if (studentScore[a] > 50) {
    console.log("Passed!");
  } else {
    console.log("Fail!");
  }
}

//6. ARROW FUNCTION
// const math001 = 50
// const eng001 = 10

const passed = (math001, eng001) => {
  if (math001 && eng001 >= 50) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
passed(90, 50);

//7. FUNCTION CHECK EMAIL OR PHONE IS AVAILABLE
// const email = true
// const phone = false

function emailNPhone(email, phone) {
  if (email === true || phone === true) {
    console.log("Allow to SignUp!");
  } else {
    console.log("Deny SignUp!");
  }
}
emailNPhone(false, false);

//8. FUNCTION USERNAME OR PASSWORD IS EMPTY

function usernameOrPassword(usrname, passwrd) {
  // if(usrname || passwrd === "" )

  if (usrname === "" || passwrd === "") {
    console.log("Invalid Input");
  } else {
    console.log("Valid Input");
  }
}
usernameOrPassword("65165465", "");

//9. USING TERNARY OPERATOR

// function hourChecker(hours) {
//   return hours >= 40 ? "Full-time" : "Part-time";
// }
  const hours = 41;
  const hourChecker = hours >= 40 ? "Full-time" : "Part-time" ;
    console.log(hourChecker);

//10. ARROW FUNCTION RETURN LARGER ONE

const toLargerNumber = (x, y) => x > y ? x : y;

console.log(toLargerNumber(105, 100));


// DESIGNING A SEARCH 

const dataBase = [
  "james",  "kola",  "john",  "Rashida",  "Kudi",  "bukki",  "Debby",  "Tope",  "Ope",  "Ugo", "200" , "300"
];

function inputchecker(searcherInput) {
  if (dataBase.map(name => name.toLowerCase()).includes(searcherInput.toLowerCase())) {
    console.log(searcherInput);
} else {
  console.log("Not avaliable!");
}
}

inputchecker("200")
 
  
 

 
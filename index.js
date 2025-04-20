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

<<<<<<< HEAD
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
 
  
 

 
=======
console.log(toLargerNumber(100, 220));






//




const drugs = [
 { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
 { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
 { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
 { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
 { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
 { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
 { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
 { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
 { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
 { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
 { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
 { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
 { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
 { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
 { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
 { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
 { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
 { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
 { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
 { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
];




1. Get all drugs that are antibiotics.

2. Return an array of drug names in lowercase.

3. Write a function that accepts a category and returns all drugs under that category.

4. Log each drug’s name and its manufacturer.

5. Return all drugs that require a prescription.

6. Return a new array, each item should follow the format: "Drug: [name] - [dosageMg]mg".

7. Write a function that returns all drugs with a stock less than 50.

8. Return all drugs that are not prescription-only.

9. Write a function that takes a manufacturer name and returns how many drugs are from that company.

10. Use forEach() to count how many drugs are Analgesics.


>>>>>>> 63b8e839eacfcc44fdd0288d750f7a2a32833d90

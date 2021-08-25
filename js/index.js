console.log("connected");
// The const keyword takes up less memory than let

// String

let firstName = "Jordan Alexander";
console.log(firstName, firstName.length);

// Back-ticks seem future-proof because we can add code to them

const empty = "";
console.log(empty.length);

const twentyEight = "28";
const numberTwentyEight = parseInt(twentyEight);
console.log(numberTwentyEight, typeof numberTwentyEight);

// Handy use for the replace method

let firstNameNew = firstName.replace("Jordan", "Steven");
console.log(firstNameNew, firstNameNew.length);

let firstNameCap = firstName.toUpperCase();
console.log(firstNameCap);

// Handy use for the concat method

let bothNames = firstName.concat(" ", firstNameCap);
console.log(bothNames);

let price = 9.537223;
let roundedPrice = price.toFixed(2);
console.log(roundedPrice);

// Boolean

// true
// false
// not "true" or "false", True or False

const dateElement = document.getElementById("banana");
// What type of event are we listening for? A click.

const printText = (e) => {
  console.log("From the print text function");
  console.log(e.target);
};

dateElement.addEventListener("click", printText);

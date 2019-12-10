/*create variable for input field called "myAge"*/

let myAge = 39;

/*create variable named "earlyYears" with a numerical value of 2*/

let earlyYears = 2;

/*redefine "earlyYears" to equal "earlyYears" multiplied by 10.5*/

earlyYears *= 10.5;

/*define a variable called "laterYears" that equals "myAge" minus 2*/

let laterYears = myAge - 2;

/*multiply "laterYears" by 4 to convert to dog years and reassign the result to "laterYears"*/

laterYears = laterYears *= 4;

/*add "earlyYears" and "laterYears" together and asign the result to "myAgeInDogYears"*/

myAgeInDogYears = earlyYears + laterYears;

/*assign name to "myName" and make it lowercase*/

let myName = "Dom".toLowerCase();

/*output sentence to console that includes the variables "myName", "myAge" and "myAgeInDogYears" which incidentally is a silly name for a variable*/

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);

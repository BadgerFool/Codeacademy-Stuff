//needs work, see TO DO at bottom.

/*

//creates getSleepHours funcion that returns the correct value for each day of the week using else if

const getSleepHours = day => {
  if(day === "monday"){
    return 8;
  } else if(day === "tuesday"){
    return 5;
  } else if(day === "wednesday"){
    return 7;
  } else if(day === "thursday"){
    return 2;
  } else if(day === "friday"){
    return 14;
  } else if(day === "saturday"){
    return 6;
  } else if(day === "sunday"){
    return 9;
  }   else {
    return "invalid input";
  }
};

*/

//creates getSleepHours function that returns the correct value for each day of the week using switch


const getSleepHours = day => {
switch(day) {
    case "monday":
      return 8;
    case "tuesday":
      return 8;
    case "wednesday":
      return 9;
    case "thursday":
      return 6;
    case "friday":
      return 9;
    case "saturday":
      return 6;
    case "sunday":
      return 9;
    default:
      return "invalid input";
}
};



//test function getSleepHours()
/*
console.log(getSleepHours("monday"));
console.log(getSleepHours("tuesday"));
console.log(getSleepHours("wednesday"));
console.log(getSleepHours("thursday"));
console.log(getSleepHours("friday"));
console.log(getSleepHours("saturday"));
console.log(getSleepHours("sunday"));
console.log(getSleepHours("POTATO"));
*/



//creates getActualSleepHours function that returns the total hours slept for the week

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");


console.log("You slept " + (getActualSleepHours()) + " hours.");




const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}


console.log("Your ideal is " + (getIdealSleepHours()) + " hours.");


//creates calculateSleepDebt() function


const calculateSleepDebt = () => {
  let actualSleepHours = (getActualSleepHours());
  let idealSleepHours = (getIdealSleepHours());
  if (actualSleepHours < idealSleepHours) {
    console.log("Get " + (idealSleepHours - actualSleepHours) + " hours more sleep!");
  }  if (actualSleepHours > idealSleepHours) {
    console.log("You slept " + (actualSleepHours - idealSleepHours) + " hours more!");
  } else if (actualSleepHours === idealSleepHours) {
    console.log("Perfect! Your slept just the right amount!");
  }
};

calculateSleepDebt()

//TO DO  when calculateSleepDebt() = 1; log "hour" instead of "hours"


//Dominic Wheeler

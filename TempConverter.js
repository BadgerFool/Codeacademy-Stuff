/*Set "kelvin" variable to a fixed 293"*/

const kelvin = 0;

/*convert from Kelvin to Celsius by subtracting 273 and assign the result to a fixed variable called "celsius"*/

const celsius = kelvin - 273;

console.log("The temperature is " + celsius + " degrees Celsius.");

/*convert from Celsius to Fahrenheit using formula F=C*(5/9)+32 and asign the result to a non fixed variable called "fahrenheit" */

let fahrenheit = celsius * (9 / 5) + 32;

/*round the variable "fahrenheit" down to closest integer*/

fahrenheit = Math.floor(fahrenheit);

/*display final temperature converted from Kelvin to Fahrenheit*/

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");


let newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log("The temperature in newtons is = " + newton + ` "degrees of heat."`);

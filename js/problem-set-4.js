/*
 * Hello. 2 points.
 */

function hello() {

  // WRITE YOUR EXERCISE 1 CODE HERE
  {
    let hi = document.getElementById("output1") ;
    hi.innerHTML = "Hello, AP Computer Science Principles!" ;
  }
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY      Use the @name letiable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("Please Enter Your Name") ;
  let again = document.getElementById("output2") ;
  again.innerHTML = "Hello, " + name + "!" ;
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  fahr = ((cels * 9/5) + 32).toFixed(2) ;
  let total = document.getElementById("output3") ;
  total.innerHTML = (cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.") ;
  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  cels = ((fahr - 32) * 5/9).toFixed(2) ;
  let total = document.getElementById("output4") ;
  total.innerHTML = (fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.") ;
  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let mile = (Math.floor(inches / 63360)) ;
  let yard = (Math.floor(inches % 63360 / 36)) ;
  let feet = (Math.floor(inches % 63360 % 36 / 12)) ;
  inches = (Math.floor(inches % 63360 % 36 % 12)) ;
  let total = document.getElementById("output5") ;
  total.innerHTML = ("Miles: " + mile + "<br/>" + "Yards: " + yard + "<br/>" + "Feet: " + feet + "<br/>" + "Inches: " + inches) ;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilom = (Math.floor(centimeters / 100000)) ;
  let met = (Math.floor(centimeters % 100000 / 100)) ;
  centimeters = (Math.floor(centimeters % 100000 % 100)) ;
  let total = document.getElementById("output6") ;
  total.innerHTML = ("Kilometers: " + kilom + "<br/>" + "Meters: " + met + "<br/>" + "Centimeters: " + centimeters) ;
  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gall = (Math.floor(fluidOunces / 128)) ;
  let quart = (Math.floor(fluidOunces % 128 / 32)) ;
  let pint = (Math.floor(fluidOunces % 128 % 32 / 16)) ;
  let cups = (Math.floor(fluidOunces % 128 % 32 % 16 / 8)) ;
  fluidOunces = (Math.floor(fluidOunces % 128 % 32 % 16 % 8)) ;
  let total = document.getElementById("output7") ;
  total.innerHTML = ("Gallons: " + gall + "<br/>" + "Quarts: " + quart + "<br/>" + "Pints: " + pint + "<br/>" + "Cups: " + cups + "<br/>" + "Fluid Ounces: " + fluidOunces) ;
  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons = (Math.floor(ounces / 32000)) ;
  let pound = (Math.floor(ounces % 32000 / 16)) ;
  ounces = (Math.floor(ounces % 32000 % 16)) ;
  let total = document.getElementById("output8") ;
  total.innerHTML = ("Tons: " + tons + "<br/>" + "Pounds: " + pound + "<br/>" + "Ounces: " + ounces) ;
  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let doll = (Math.floor(pennies / 100)) ;
  let quarters = (Math.floor(pennies % 100 / 25)) ;
  let dime = (Math.floor(pennies % 100 % 25 / 10)) ;
  let nick = (Math.floor(pennies % 100 % 25 % 10 / 5)) ;
  pennies = (Math.floor(pennies % 100 % 25 % 10 % 5)) ;
  let total = document.getElementById("output9") ;
  total.innerHTML = ("Dollars: " + doll + "<br/>" + "Quarters: " + quarters + "<br/>" + "Dimes: " + dime + "<br/>" + "Nickels: " + nick + "<br/>" + "Pennies: " + pennies) ;
  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  amount *= 100
  let quarters = Math.floor(amount / 25) ;
  let dimes = Math.floor(amount % 25 / 10) ;
  let nickels = Math.floor(amount % 25 % 10 / 5) ;
  let pennies = Math.floor(amount % 25 % 10 % 5) ;
  let coins = (quarters + dimes + nickels + pennies) ;
  let total = document.getElementById("output10") ;
    if (quarters + dimes + nickels + pennies < 0.1) {
        total.innerHTML = (coins + " coins.");
    }
    else {
      if (quarters + dimes + nickels + pennies < 1.1) {
        total.innerHTML = (coins + " coin.");
      }
      else {
        total.innerHTML = (coins + " coins.");
      }
      }
  ///////////////////////// DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

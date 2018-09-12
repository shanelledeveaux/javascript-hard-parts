// create a function 10 squared

function tenSquared() {
  return 10 * 10;
}

tenSquared(); //100

//This breaks the principle to NOT REPEAT YOURSELF.

//we can generalize this function.

function squareNum(num) {
  return num * num;
}

squareNum(10); //100
squareNum(9); //81

// functions have two stages, definition and execution.

function copyArrayAndMultiplyBy2(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}
const myArray = [1, 2, 3];
let result = copyArrayAndMultiplyBy2(myArray);

//GLOBAL MEMORY
// copyArrayAndMultiplyBy2: function
// myArray: [1,2,3]
// result: [2,4,6]

// DIFFERENCE BEWTWEEN VAR AND LET

// fundamental rule: Use const for everything UNLESS we are planning to replace the originial values, then use let.

//TO GENERALIZE THE FUNCTION AND ADD CALLBACK:

function copyArrayAndMutatue(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

let results = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

//functions in javascript = first class objects.

//They can co-exist and be treated like any other javascript object.
//1. assigned to variables and properties of other objects.
//2. passed as arguments into functions.
//3. returned as values from functions.

// HIGHER ORDER FUNCTIONS
// Take in a function or passes out a function.

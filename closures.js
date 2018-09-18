// When our functions get called, we create a live store of data (local memory/variable environment/state) for that functions execution context.

//When the function finishes executing, it's local memory is deleted. (except the return value)

// but what if functions could hold on to live data/state between executions?

// This would let our function definitions have an associated cache/persistent memory

// but it starts with returning a function from another function.

function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}

let generatedFunc = instructionGenerator();

let result = generatedFunc(3); //6

//calling a function in the same scope as it was defined.

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  incrementCounter();
}

outer();

//where you define your functions determines what variables your function have access to when you call the function.

// what if we call the function outside of where it was defined?

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
}
outer();

incrementCounter();

//Will not work.

//there is a way to run a function outside of where it was defined - return the function and assign it to a new variable.

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

var myNewFunction = outer(); //myNewFunction = incrementCounter
myNewFunction();

//increment counter has a special bond to the surrounding data from when the function was born.
//this is called a closure or a closed over variable environment.

// STATIC/LEXICAL SCOPING

//lexical scope - the availible live data when our function was defined - is what determines our available variables and prioritization at function execution, NOT where our function is called.

//what if we run 'outer' again and store the returned incrementCounter in anotherFunction

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

let myNewFunction = outer();
myNewFunction();
myNewFunction();

let anotherFunction = outer();
anotherFunction();
anotherFunction();

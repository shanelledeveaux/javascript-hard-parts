//WHAT HAPPENS WHEN JAVASCRIPT RUNS MY CODE?

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const name = "Will";

// processes code line by line. 'Just in time compilation'.
// assigns data to labels.'

//GLOBAL MEMORY
//num = 3;
//multiplyBy2 : ASSIGNED TO FUNCITON
// name = 'Will';

//FUNCTION IS NOT RUN BECAUSE IT IS NOT CALLED. NOTHING INSIDE THE FUNCTION IS ASSIGNED UNTIL THE FUNCTION IS CALLED.

// When we start running the code, we create a global execution context.
// -- Thread of execution (parsing and executing the code line by line)
// -- Live memory of variables with data (known as Global Variable Environment)

//THE THREAD
// -- JavaScript can only do one thing at a time. Called SINGLE THREAD.
// -- Sychronous execution.

const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

// RUNNING/ CALLING/ INVOKING A FUNCTION
// -- not the same as defining a function.
// -- create a new execution context compromising:
// ---- the thread of execution (goes through the code in the function line by line)
// ---- a local memory (Variable environment) where anything defined in the function is stored.

//GLOBAL MEMORY
//output = multiplyBy2(4)

//when running a function, the global thread is paused.

//LOCAL MEMORY (VARIABLE ENVIRONMENT)
// inputNumber: 4
// result: 8

//GLOBAL MEMORY
// output: 8;

// CALL STACK -- a special data structure, allows us to track the current thread of execution.

// PUSHING -- adding to the stack.

// Calling a function creates a new EXECUTION CONTEXT.

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
var egg = "egg";

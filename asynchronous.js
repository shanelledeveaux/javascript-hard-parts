//Asynchronicity is the backbone of modern web development.

//JavaScript is a single threaded (one command executing at a time) and has a synchronous execution model (each line executes in the order the code appears.)

//What do we do if we need to wait before we can execute certain bits of code? tension of wanting to delay some code but not wanting to block the thread.

//In what order will our console logs occur?

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);
console.log("Me first");

//WEB BROWSER API

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 0);
console.log("Me first!");

//declare the function printHello
//web browser has background features, including a timer.

//we need a way of predictably understanding how this outside world will interact with our javascript execution model.

//what happens here?

function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {
  //blocks in the Javascript thread for 1 second.
}

setTimeout(printHello, 0);
blockFor1Sec();
console.log("Me first!");

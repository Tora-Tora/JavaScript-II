// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.
function iHaveABunchOfStuffInMe(){
  const BigBoss = "I can go anywhere in this function because I'm the big boss.";
  function LittleSweatShopOfHorror() {
    const Peon = "I wish I could leave this sweat shop."
    console.log(`Once in a while the Big Boss visit the sweat shop and he would say: ${BigBoss}`);
  }
  LittleSweatShopOfHorror();
  console.log(`And the peons would say: ...`);
  console.log("Peon didn't say anything because peon can't leave sweatshop mwahaha!");
}

iHaveABunchOfStuffInMe();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  let counter = () => {
    return ++count;
  }
  return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2


// Note to Self: had to return counter as a variable and not function [counter vs counter()] this then return the text of the entire function to myCounter. When invoke in the console.log it would log the entire block of of the funtion as text but then we put () at the end and turn it into a function so it execute the block as if it's a funtion.
const myCounter = counterMaker();
console.log("Testing counter.")
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMakerWithLimit = () => {
  let count = 0
  let counter = () => {
    let limit = 4;
    if (count >= limit) { count = 0; }
    return ++ count;
  }
  return counter;
}

const newCounter = counterMakerWithLimit();
console.log("Testing counter with limit.")
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  return {
    increment: function increment() { return ++count;},
    decrement: function decrement() { return --count;}
  }
};

console.log("Testing increment/decrement.")
const fancyCounter = counterFactory();
console.log(fancyCounter.increment());
console.log(fancyCounter.increment());
console.log(fancyCounter.increment());
console.log(fancyCounter.decrement());
console.log(fancyCounter.decrement());
console.log(fancyCounter.increment());
console.log(fancyCounter.increment());
console.log(fancyCounter.increment());
console.log(fancyCounter.increment());
console.log(fancyCounter.decrement());
console.log(fancyCounter.increment());
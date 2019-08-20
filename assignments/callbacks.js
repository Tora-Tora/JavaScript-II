// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const color = ['red', 'white', 'blue', 'pink', 'black', 'green', 'blue', 'pink', 'black'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// let test1 = getLength(items, item => `Array is ${item} unit long.`)
// console.log(test1);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

// let test1 = last(items, item => `${item} is the last item.`)
// console.log(test1);

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
}

// let test1 = sumNums(15, 22, num => `The sum is ${num}`)
// console.log(test1);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let noDuplicates = [];
  array.forEach(function(current, index, array){
    // looking for current item in the array from the index right after current item. If it exist and therefore has duplicate it will return the index, if not it will return -1. If it return -1 then that item is unique from the current position on toward the end of array. We only push unique item into the new array. As such only the last instance of that value is push into the new array.
    if(array.indexOf(current, index+1)==-1){
      noDuplicates.push(current);
    }

  })
  return cb(noDuplicates);
}

// testing for removeDuplicates
// console.log(`here's the original color array ${color}`);
// let test1 = removeDuplicates(color, item => `Here's the list after duplicates are removed. ${item}`);
// console.log(test1);


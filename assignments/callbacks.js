// Create a higher order function and invoke the callback function to test your work.
// You have been provided an example of a problem and a solution to see how this works with our items array.
// Study both the problem and the solution to figure out the rest of the problems.

/* #region -- EXAMPLE REGION   */

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// //Given this problem: 

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
// }
// // Potential Solution:
// // Higher order function using "cb" as the call back
// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }
// // Function invocation 
// firstItem(items, function (first) {
//   console.log(first)
// });

/* #endregion */

const itemsV2 = ['GTX 1060', 'i7 6600k', 'Trident 8GB DDR5', 'Coolermaster Case'];
// My Custom Array

function getLength(array, callback) {
  // getLength passes the length of the array into the callback.
  return callback(array.length);
}
// Invocation of the function
getLength(itemsV2, function(NewFunctionName){
  console.log(NewFunctionName)
});

// end problem 1

// start problem 2

function last(arr, cb) {
  // last passes the last item of the array into the callback.
    return cb(arr.splice(-1));
}
// Invocation of the function
last(itemsV2, function(splice){
    console.log(splice);
});

// end problem 2

//start problem 3

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
// Invocation of the function
sumNums(840, 92473, function(x, y){
  let result = x + y;
  console.log(result);
})

// end problem 3

// start problem 4

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
multiplyNums(25, 4, function(x, y){
  let result = x * y;
  console.log(result);
});

// end problem 4

// start problem 5

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return list.includes(item);
}
console.log(contains('Trident 8GB DDR5', itemsV2));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
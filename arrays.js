var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var firstArray = [1]
firstArray = [element, ...firstArray]
return firstArray;
}

  // const firstArray = [1];
  //const secondArray = ["foo", ...firstArray]
  //return firstArray;
  // }

function destructivelyAddElementToBeginningOfArray(array, element) {
const firstArray = [1];
const secondArray = [element, ...firstArray]
return firstArray;
}
// var newArray = [1];
// newArray.unshift(element);
// return newArray;
//     }

function addElementToEndOfArray(array, element) {
  var firstArray = [1]
  firstArray = [...firstArray, element]
return firstArray;
}

// function destructivelyAddElementToEndOfArray(array, element) {
// var newArray = [1]
// newArray.push(element);
// return newArray;
//     }

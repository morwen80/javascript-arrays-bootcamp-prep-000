var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var firstArray = [1]
firstArray = [element, ...firstArray]
return firstArray;
}



function destructivelyAddElementToBeginningOfArray(array, element) {
  const newArray = [1];
  newArray.unshift(element);
  return newArray;
      }
  // const firstArray = [1];
  // const secondArray = [element, ...firstArray]
  // return firstArray;
  // }


// var firstArray = [1];
// firstArray = [element, ...firstArray]
// return firstArray;
// }




function addElementToEndOfArray(array, element) {
  var firstArray = [1]
  firstArray = [...firstArray, element]
return firstArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
var firstArray = [1];
var secondArray = firstArray.push(element);
return firstArray; //this
}


function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var firstArray = [1, 2, 3];
  var secondArray = firstArray.shift();
  return firstArray;
}

function removeElementFromBeginningOfArray(array) {
  const newArray = [1, 2, 3];
  newArray = newArray.slice(0);
  return newArray;
}

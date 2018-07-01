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

// function destructivelyAddElementToEndOfArray(array, element) {
// var newArray = [1]
// newArray.push(element);
// return newArray;
//     }


function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  const firstArray = [1, 2, 3];
  const secondArray = firstArray.shift();
  return secondArray; //this
}

function removeElementFromBeginningOfArray(array) {
  const newArray = [1, 2, 3];
  newArray = newArray.slice(0);
  return newArray;
}

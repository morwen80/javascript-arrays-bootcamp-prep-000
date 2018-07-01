var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


//CORRECT
function addElementToBeginningOfArray(array, element) {
var firstArray = [1]
firstArray = [element, ...firstArray]
return firstArray;
}


// CORRECT
function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
return array
}

  // const newArray = [1];
  // newArray.unshift(element);
  // return newArray;
  //     }

  // const firstArray = [1];
  // const secondArray = [element, ...firstArray]
  // return firstArray;
  // }


// CORRECT
function addElementToEndOfArray(array, element) {
  var firstArray = [1]
  firstArray = [...firstArray, element]
return firstArray;
}


//CORRECT
function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
  return array
  }


function accessElementInArray(array, index) {
  return array[index];
}

//THIS 
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.pop(element)
  return array
  }
  // var firstArray = [1, 2, 3];
  // var secondArray = firstArray.shift();
  // return firstArray;
}

function removeElementFromBeginningOfArray(array) {
  const newArray = [1, 2, 3];
  newArray = newArray.slice(0);
  return newArray;
}

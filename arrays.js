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


//CORRECT
function accessElementInArray(array, index) {
  return array[index];
}

//CORRECT
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
  }
  // var firstArray = [1, 2, 3];
  // var secondArray = firstArray.shift();
  // return firstArray;

//CORRECT
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array
  // const newArray = [1, 2, 3];
  // newArray = newArray.slice(0);
  // return newArray;
}

//CORRECT
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

//THIS
function removeElementFromEndOfArray(array){
  array.slice(0, array.length - 1);
  return array
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
var firstArray = [1]
firstArray = [element, ...firstArray]
return firstArray;
}

  // const firstArray = [1];
  //
  // const secondArray = ["foo", ...firstArray]
  //
  //   return firstArray;
  //     }



function destructivelyAddElementToBeginningOfArray(array, element) {
var newArray = [1]
newArray.unshift(element);
return newArray;
    }

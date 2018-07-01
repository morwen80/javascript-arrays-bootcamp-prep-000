var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  const firstArray = [1];

  const secondArray = [element, ...firstArray]

    return firstArray;
      }

// [element, ...chocolateBars];
// return chocolateBars;
//   }

function destructivelyAddElementToBeginningOfArray(array, element) {
const newArray = [1];
  newArray.unshift("foo");
return newArray;
    }

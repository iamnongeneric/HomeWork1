var bubbleSort = function bubbleSortF (array) {

  var outerCounter = array.length - 1;
  var innerCounter = 0;
  var swapped;

  function loop () {
    //outer loop
    if (outerCounter > 0) {
      //inner loop
      swapped = false;
      if (innerCounter < outerCounter) {
        if (array[innerCounter] > array[innerCounter + 1]) {
          swap(array, innerCounter, innerCounter + 1);
          swapped = true;
        }
        innerCounter++;
      }

      else {
        outerCounter--;
        innerCounter = 0;
      }
    }
    else return;
  }

  return {
    loop : loop,
    getCurrentElement : function () {
      return innerCounter;
    },
    getList : function () {
      return array;
    }
  };
}

var swap = function swapF (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

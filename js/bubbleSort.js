var bubbleSort = function bubbleSortF (array) {

  var outerCounter = array.length - 1;
  var innerCounter = 0;

  function loop () {

    if (outerCounter > 0) {

      if (innerCounter < outerCounter) {

        if (array[innerCounter] > array[innerCounter + 1]) {
          swap(array, innerCounter, innerCounter + 1);
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

  return loop;
}

var swap = function swapF (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  arra[secondIndex] = temp;
}

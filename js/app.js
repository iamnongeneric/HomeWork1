var buttonApply = document.getElementById('button_apply');
var buttonNext = document.getElementById('button_next');
var viewSection, bubbleSortObject;

var checkUserInput = function checkUserInputF (input) {
  if (!input) return false;
  if (input.constructor !== Array || input.length == 0) return false;
  for (var i = 0; i < input.length; i++) {
      if (!(!isNaN(parseFloat(input[i])) && isFinite(input[i]))) {
        return false;
      }
  }
  return true;
}

var setListView = function setListViewF (input) {
  viewSection = document.getElementById('nums_list');
  input.forEach(function (item) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    viewSection.appendChild(li);
  });
}

var respondToUserInput = function respondToUserInputF() {
  var input = document.getElementById('nums_input').value.trim().split(" ");
  input = input.filter(function (item) {
    return /\S/.test(item);
  });
  input = input.map(function (item) {
    return parseInt(item, 10);
  });
  var executionSection = document.getElementById('execution_section');
  var errorMessage = document.getElementById('error_message');
  if (checkUserInput(input)) {
    //create li elements from input and set execustion section visible
    bubbleSortObject = bubbleSort(input);
    setListView(input);
    button_apply.disabled = true;
    executionSection.style.display = 'block';
    errorMessage.style.display = 'none';
    console.log(input);
  } else {
    //show error section
    alert(input);
    errorMessage.style.display = 'block';
  }
}

var controlListChanges = function controlListChangesF () {
  viewSection.innerHTML = "";
  bubbleSortObject.loop();
  setListView(bubbleSortObject.getList());
}

buttonApply.onclick = respondToUserInput;
buttonNext.onclick = controlListChanges;

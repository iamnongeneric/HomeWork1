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

var updateList = function updateListF (listOfNodes) {
  var list = bubbleSortObject.getList();
  for (var i = 0; i < listOfNodes.length; i++) {
    listOfNodes[i].innerHTML = list[i];
  }
}

var controlListChanges = function controlListChangesF () {
  var listOfNodes = viewSection.getElementsByTagName('li');
  var current = bubbleSortObject.getCurrentElement();
  var currentNode = listOfNodes[current];
  var next = bubbleSortObject.getCurrentElement() + 1;
  var nextNode = listOfNodes[next];
  var end = bubbleSortObject.getCurrentEndOfLoop();
  var nums = bubbleSortObject.getList();
  updateList(listOfNodes)
  if (!nextNode || nextNode.className == "final") {
    currentNode.className = "final";
    bubbleSortObject.loop();
  }

  if (!nextNode.className) {
    if (currentNode.className != "current") {
      currentNode.className = "current";
      nextNode.className = "current";
      bubbleSortObject.loop();
    }
    else {
      listOfNodes[current - 1].className = "";
      nextNode.className = "current";
    }
  }

  if (nums[current] > nums[next]) {
    if (currentNode.className == "swapped") {
      bubbleSortObject.loop();
      updateList(listOfNodes);
    }
    else {
      currentNode.className = "swapped";
      nextNode.className = "swapped";
    }
  }
}

buttonApply.onclick = respondToUserInput;
buttonNext.onclick = controlListChanges;

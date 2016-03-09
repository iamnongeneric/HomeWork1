var buttonApply = document.getElementById('button_apply');
var buttonNext = document.getElementById('button_next');
var buttonAutoPlay = document.getElementById('button_autoplay');
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
  var inputField = document.getElementById('nums_input');
  var input = inputField.value.trim().split(" ");
  input = input.filter(function (item) {
    return /\S/.test(item);
  });
  input = input.map(function (item) {
    return parseInt(item, 10);
  });
  var executionSection = document.getElementById('execution_section');
  var errorMessage = document.getElementById('error_message');
  if (checkUserInput(input)) {
    bubbleSortObject = bubbleSort(input);
    setListView(input);
    button_apply.disabled = true;
    executionSection.style.display = 'block';
    errorMessage.style.display = 'none';
    console.log(input);
  } else {
    errorMessage.style.display = 'block';
    inputField.value = "";
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
  var next = current + 1;
  var currentNode = listOfNodes[current];
  var nextNode = listOfNodes[next];
  var nums = bubbleSortObject.getList();

  if (current != 0) {
    //убирает класс у пройденного элемента
    listOfNodes[current - 1].className = "";
  }

  if (nums[current] > nums[next]) {
    //для понимания читать от последнего условия к первому
    if (currentNode.className == "swapped") {
      //выполнить итерацию и идти дальге
      bubbleSortObject.loop();
      updateList(listOfNodes);
    }
    if (nextNode.className == "current") {
      //затем показать, что текущий больше следующего
      currentNode.className = "swapped";
      nextNode.className = "swapped";
    }
    else {
      //просто подсветить текущие элементы
      currentNode.className = "current";
      nextNode.className = "current";
      return;
    }
  }

  else {
    if (!nextNode || nextNode.className == "final") {
      currentNode.className = "final";
    } else {
      currentNode.className = "current";
      nextNode.className = "current";
    }
  }

  if (currentNode.className == "current" || currentNode.className == "final") {
    bubbleSortObject.loop();
    updateList(listOfNodes);
  }
}

var ifDone = function ifDoneF(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].className != "final") {
      return false;
    }
  }
  return true;
}

var autoPlay = function autoPlayF () {
  while (!ifDone(viewSection.getElementsByTagName('li'))) {
    controlListChanges();
  }
}

buttonApply.onclick = respondToUserInput;
buttonNext.onclick = controlListChanges;
buttonAutoPlay.onclick = autoPlay;

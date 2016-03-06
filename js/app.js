var buttonApply = document.getElementById('button_apply');

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

var setUserInputView = function setUserInputViewF (input) {
  var viewSection = document.getElementById('nums_list');
  input.forEach(function (item) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    viewSection.appendChild(li);
  })
}

var respondToUserInput = function respondToUserInputF() {
  var input = document.getElementById('nums_input').value.split(" ");
  var executionSection = document.getElementById('execution_section');
  var errorMessage = document.getElementById('error_message');
  if (checkUserInput(input)) {
    //create li elements from input and set execustion section visible
    button_apply.disabled = true;
    setUserInputView(input);
    executionSection.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    //show error section
    errorMessage.style.display = 'block';
  }
}


buttonApply.onclick = respondToUserInput;

var buttonApply = document.getElementById('button_apply');

var validateUserInput = function validateUserInputF (input) {
  for (var i = 0; i < input.length; i++) {
      if (!(!isNaN(parseFloat(input[i])) && isFinite(input[i]))) {
        return false;
      }
  }
  return true;
}

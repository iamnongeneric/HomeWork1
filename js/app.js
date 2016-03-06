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

var expect = chai.expect;

describe('Test of checking user input function', function () {
  it('should return false if array is empty', function () {
    expect(checkUserInput([])).to.equal(false);
    expect(checkUserInput(new Array())).to.equal(false);
  });
  it('should return true if all array items are nums', function () {
    expect(checkUserInput([12, 5.5, -3, 0, 20, 7])).to.equal(true);
  });
  it('should return false if there is at least one not numerical item',
  function() {
    expect(checkUserInput(["I", "love", "JS"])).to.equal(false);
  });
  it('should return false if argument is not an array', function () {
    expect(checkUserInput("new Array()")).to.equal(false);
    expect(checkUserInput(undefined)).to.equal(false);
    expect(checkUserInput(NaN)).to.equal(false);
    expect(checkUserInput(null)).to.equal(false);
    expect(checkUserInput(15)).to.equal(false);
  });
  it('should return false if there is no argument at all', function () {
    expect(checkUserInput()).to.equal(false);
  });
});

describe('Array', function () {
  describe('#removeSpaces', function() {
    var arrWithSpaces = [" ", 5, "hey", " ", "chai"];
    var arrWithoutSpaces = [5, "hey", "chai"];
    it('should remove spaces from array', function () {
      expect(arrWithSpaces.removeSpaces()).to.deep.equal(arrWithoutSpaces);
    });
  });
  describe('#convertToNumsArray', function () {
    var testArr = ["5", "you can't", "-1", null];
    var probRes = [5, NaN, -1, NaN];
    it('should convert given array to array of numbers', function () {
      expect(testArr.convertToNumsArray()).to.deep.equal(probRes);
    });
  });
});

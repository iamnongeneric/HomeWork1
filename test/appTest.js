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
})

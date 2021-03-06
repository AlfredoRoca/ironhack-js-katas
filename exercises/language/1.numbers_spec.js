describe('Working with Numbers', function() {

  // Change the expresion after the comma to fullfill the expectation
  // The `assert.equals` expresion makes the test pass if and only if both
  // expresions are equal.
  // General form:
  // assert.equal(<expression>, <expressionExpectation>);

  it('sum', function() {
    assert.equal(3 + 4, 0);
  })

  it('difference', function() {
    assert.equal(4 - 2, 0);
  })

  it('multiplaction', function() {
    assert.equal(3 * 2, 0);
  })

  it('division', function() {
    assert.equal(6 / 2, 0);
  })

  it('modulus', function() {
    assert.equal(10 % 3, 0);
  })

  it('equality', function() {
    var number1  = 5;
    var number2  = 5;
    var equality = number1 == number2;

    assert.equal(equality, false);
  })

  it('equality with type cohersion', function() {
    var number   = 5;
    var string   = '5';
    var equality = number == string;

    assert.equal(equality, false);
  })

  it('equality with type cohersion -null-', function() {
    var number1  = 0;
    var number2  = null;
    var equality = number1 == number2;

    assert.equal(equality, false);
  })

  it('equality with type cohersion -undefined-', function() {
    var number1  = 0;
    var number2  = undefined;
    var equality = number1 == number2;

    assert.equal(equality, false);
  })

  it('equality with type checking', function() {
    var number   = 5;
    var string   = '5';
    var equality = number === string;

    assert.equal(equality, true);
  })

  it('using variables to do operations', function() {
    // Calculate the <totalNumberOfDays> that are contained in the
    // <numberOfWeeks>
    var numberOfWeeks      = 5;
    var numberOfDaysInWeek = 7;
    var totalNumberOfDays;

    assert.equal(35, totalNumberOfDays);
  })

  it('transforming a number to string', function() {
    // Note: don't use parseInt
    assert.strictEqual('5', 5);
  })

})

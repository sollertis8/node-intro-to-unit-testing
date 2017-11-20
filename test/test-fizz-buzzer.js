const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    
      // test the normal case
      it('should return fizz-buzz, buzz, fizz, or a number', function() {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
          {a: 15, expected: 'fizz-buzz' || 'buzz' || 'fizz'},
          {a: 3, expected: 'fizz' || 3},
          {a: 5, expected: 'buzz' || 5 || 2},
          {a: -15, expected: 'fizz-buzz' || 'buzz' || 'fizz'},
          {a: -3, expected: 'fizz' || 3},
          {a: -5, expected: 'buzz' || 5 || 2},
          {a: 4, expected: 4}
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function(input) {
          const answer = fizzBuzzer(input.a);
          answer.should.equal(input.expected);
        });
      });
    
      it('should raise error if args not numbers', function() {
        // range of bad inputs where not both are numbers
        const badInputs = [
          ('a'),
          ('1'),
          (false)
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function(input) {
          (function() {
              fizzBuzzer(input[0])
          }).should.throw(Error);
        });
      });
    });

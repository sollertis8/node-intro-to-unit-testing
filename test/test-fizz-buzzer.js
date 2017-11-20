const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    
    it('should return "fizz-buzz" for multiples of 15', function() {
        [15, 30, 45, -15, -30, -45].forEach(function(input) {
          fizzBuzzer(input).should.equal('fizz-buzz');
        });
      });
    
      it('should return "fizz" for multiples of 3', function() {
        [3, 6, 9, 12,-3, -6, -12].forEach(function(input) {
          fizzBuzzer(input).should.equal('fizz');
        });
      });
    
      it('should return "buzz" for multiples of 5', function() {
        [5, 10, 20, -5, -10, -20].forEach(function(input) {
          fizzBuzzer(input).should.equal('buzz');
        });
      });
    
      it('should return number if not mult of 3 or 5', function() {
        [1, 2, 4, 7, 11].forEach(function(input) {
          fizzBuzzer(input).should.equal(input);
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

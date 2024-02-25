exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  isDivBy3: (num) => num % 3 === 0,
  isDivBy5: (num) => num % 5 === 0,
  fizzBuzz: function (num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    let result = '';
    if (typeof num !== 'number') { return false; }
    if (this.isDivBy3(num)) { result += 'fizz'; }
    if (this.isDivBy5(num)) { result += 'buzz'; }
    return result ? result : num;
  }
};

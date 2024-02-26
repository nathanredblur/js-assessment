exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    const bin = num.toString(2);
    return bit > bin.length ? 0 : Number(bin[bin.length - bit]);

    // Other solution
    // return (num >> (bit - 1)) & 1;
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    return num.toString(2).padStart(8, '0');
  },

  multiply: function (a, b) {
    return parseFloat((a * b).toPrecision(1));
  }
};

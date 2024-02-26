exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    let currentLetter = '';
    let letterCount = 0;
    let result = '';

    str.split('').forEach((letter) => {
      if (currentLetter === letter) {
        letterCount += 1;
        if (letterCount <= amount) {
          result += letter;
        }
      } else {
        letterCount = 1;
        currentLetter = letter;
        result += letter;
      }
    });
    return result;
  },

  wordWrap: function (str, cols) {
    const words = str.split(' ');
    let currentLine = '';
    let result = '';

    words.forEach((word, index) => {
      if (currentLine.length + word.length <= cols) {
        currentLine += word + ' ';
      } else {
        if (currentLine.length) {
          result += currentLine.trim() + '\n';
        }
        currentLine = word + ' ';
      }

      if (index === words.length - 1) {
        result += currentLine.trim();
      }
    });
    return result;
  },

  reverseString: function (str) {
    return str.split('').reverse().
      join('');
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const files = [];
    const shouldAdd = !dirName || dirName === data.dir;

    data.files.forEach((element) => {
      if (typeof element === 'string') {
        if (shouldAdd) {
          files.push(element);
        }
      } else {
        let folderFiles = [];
        if (shouldAdd) {
          folderFiles = this.listFiles(element);
        } else {
          folderFiles = this.listFiles(element, dirName);
        }

        files.push(...folderFiles);
      }
    });
    return files;
  },

  permute: function (arr) {
    // Heap's method for generating permutations
    const length = arr.length;
    const result = [arr.slice()];
    const currentIndex = new Array(length).fill(0);
    let index = 1;
    let tempIndex;

    const swap = (a, b) => {
      [arr[a], arr[b]] = [arr[b], arr[a]];
    };

    while (index < length) {
      if (currentIndex[index] < index) {
        // if index is odd then tempIndex = currentIndex[index]
        tempIndex = index % 2 && currentIndex[index];
        swap(index, tempIndex);
        ++currentIndex[index];
        index = 1;
        result.push(arr.slice());
      } else {
        currentIndex[index] = 0;
        ++index;
      }
    }
    return result;
  },

  fibonacci: function (number) {
    const memo = [0, 1];

    const fib = (n) => {
      if (typeof memo[n] === 'undefined') {
        memo[n] = fib(n - 1) + fib(n - 2);
      }
      return memo[n];
    };

    return fib(number);
  },

  validParentheses: function (n) {
    const result = [];
    const generate = (left, right, str) => {
      if (left === 0 && right === 0) {
        result.push(str);
      }
      if (left > 0) {
        generate(left - 1, right + 1, str + '(');
      }
      if (right > 0) {
        generate(left, right - 1, str + ')');
      }
    };
    generate(n, 0, '');
    return result;
  }
};

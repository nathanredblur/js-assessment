/* eslint-disable valid-jsdoc */
exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  /**
  * @param {Array} arr
  */
  indexOf(arr, item) {
    return arr.indexOf(item);
  },

  /**
  * @param {Array} arr
  */
  sum(arr) {
    return arr.reduce((previous, current) => current + previous, 0);
  },

  /**
  * @param {Array} arr
  */
  remove(arr, item) {
    return arr.reduce((previous, current) => {
      if (current === item) { return previous; }
      return [...previous, current];
    }, []);
  },

  /**
  * @param {Array} arr
  */
  removeWithoutCopy(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  /**
  * @param {Array} arr
  */
  append(arr, item) {
    return [...arr, item];
  },

  /**
  * @param {Array} arr
  */
  truncate(arr) {
    return arr.slice(0, -1);
  },

  /**
  * @param {Array} arr
  */
  prepend(arr, item) {
    return [item, ...arr];
  },

  /**
  * @param {Array} arr
  */
  curtail(arr) {
    return arr.slice(1);
  },

  /**
  * @param {Array} arr
  */
  concat(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  /**
  * @param {Array} arr
  */
  insert(arr, item, index) {
    const newArry = [...arr];
    newArry.splice(index, 0, item);
    return newArry;
  },

  /**
  * @param {Array} arr
  */
  count(arr, item) {
    const filtered = arr.filter((el) => el === item);
    return filtered.length;
  },

  /**
  * @param {Array} arr
  */
  duplicates(arr) {
    const uniques = new Set();
    const duplicates = new Set();
    arr.forEach((el) => {
      if (uniques.has(el)) {
        duplicates.add(el);
      } else {
        uniques.add(el);
      }
    });

    return Array.from(duplicates);
  },

  /**
  * @param {Array} arr
  */
  square(arr) {
    const result = [...arr];
    return result.map((el) => el ** 2);
  },

  /**
  * @param {Array} arr
  */
  findAllOccurrences(arr, target) {
    return arr.reduce(
      (previous, current, index) => {
        if (current === target) { return [...previous, index]; }
        return previous;
      }, []
    );
  },
};

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

  },

  fibonacci: function (n) {

  },

  validParentheses: function (n) {

  }
};

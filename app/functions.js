exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    return fn(...arr);
  },

  speak: function (fn, obj) {
    return Reflect.apply(fn, obj, []);
  },

  functionFunction: function (str) {
    return (str2) => `${str}, ${str2}`;
  },

  makeClosures: function (arr, fn) {
    return arr.map((el) => () => fn(el));
  },

  partial: function (fn, str1, str2) {
    return (punctuation) => fn(str1, str2, punctuation);
  },

  useArguments: function (...args) {
    return args.reduce((a, b) => a + b, 0);
  },

  callIt: function (fn, ...args) {
    Reflect.apply(fn, null, args);
  },

  partialUsingArguments: function (fn, ...argsParent) {
    return (...argsChild) => {
      const allArgs = [...argsParent, ...argsChild];
      return fn(...allArgs);
    };
  },
  curryIt: function (fn) {
    // return (a) => (b) => (c) => fn(a, b, c);

    const argsLength = fn.length;
    let currentCall = 0;
    const args = [];

    const curry = (el) => {
      if (currentCall < argsLength - 1) {
        currentCall += 1;
        args.push(el);
        return curry;
      }
      args.push(el);
      return fn(...args);
    };

    return curry;
  },

  // better curry generator solution
  curryGenerator: (fn) => {
    const helper = ({ func, args, prevArgs }) => {
      if (args.length + prevArgs.length >= func.length) {
        return func(...prevArgs, ...args);
      }
      return (...newArgs) => helper({
        args: newArgs,
        prevArgs: [...prevArgs, ...args],
        func
      });
    };
    return (...args) => helper({
      func: fn,
      args: args,
      prevArgs: []
    });
  }

};

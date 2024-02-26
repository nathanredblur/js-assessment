exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return Reflect.apply(fn, obj, []);
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    return Object.keys(obj).map((key) => `${key}: ${obj[key]}`);
  }
};

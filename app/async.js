exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: async (value) =>
    value,
  // return new Promise((resolve) => {
  //   resolve(value)
  // })
  // return Promise.resolve(value);


  manipulateRemoteData: async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const { people } = data;
    console.log(people);
    return people.map((person) => person.name).sort();
  },
};

exports = typeof window === 'undefined' ? global : window;

class Counter {
  constructor(startNumber, endNumber) {
    this.starNumber = startNumber;
    this.endNumber = endNumber;
    this.count = startNumber;
    this.run();
  }
  run() {
    console.info(this);
    console.log(this.count);
    if (this.count < this.endNumber) {
      this.count += 1;
      this.timeout = setTimeout(this.run.bind(this), 100);
    }
  }
  cancel() {
    clearTimeout(this.timeout);
  }
}

exports.countAnswers = {
  count: (start, end) => new Counter(start, end),
};

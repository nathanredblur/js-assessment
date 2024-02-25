exports = typeof window === 'undefined' ? global : window;

class Counter {
  constructor(startNumber, endNumber) {
    this.starNumber = startNumber;
    this.endNumber = endNumber;
    this.count = startNumber;
    this.start();
  }
  start() {
    this.interval = setInterval(() => {
      console.log(this.count);
      this.count += 1;
      if (this.count > this.endNumber) {
        this.cancel();
      }
    }, 100);
  }
  cancel() {
    this.interval && clearInterval(this.interval);
  }
}

exports.countAnswers = {
  count: (start, end) => {
    const counter = new Counter(start, end);
    return counter;
  }
};

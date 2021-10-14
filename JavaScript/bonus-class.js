'use strict';

// 4. Class

class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      console.log('yo!');
    }
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

class Counter2 {
  constructor() {
    this.counter = 0;
  }

  increase(runIf5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      runIf5Times();
    }
  }
}

const coolCounter2 = new Counter2();
function printSomething() {
  console.log('yo!');
}
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);
coolCounter2.increase(printSomething);

class Counter3 {
  constructor() {
    this.counter = 0;
  }

  increase(runIf5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      runIf5Times(this.counter);
    }
  }
}

const coolCounter3 = new Counter3();
function printSomething2(num) {
  console.log(`Wow! ${num}`);
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);

coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(printSomething2);
coolCounter3.increase(alertNum);

class Counter4 {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}
function printSomething3(num) {
  console.log(`Wow! ${num}`);
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}

const printCounter = new Counter4(printSomething3);
const alertCounter = new Counter4(alertNum);
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();

class Timer {
  constructor() {
    this.interval;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }

  start() {
    this.milliseconds += 5;
    if (this.milliseconds >= 999) {
      this.milliseconds = this.milliseconds - 999;
      this.seconds += 1;

      if (this.seconds === 59) {
        this.minutes += 1;
        this.seconds = 0;
        if (this.minutes === 59) {
          this.hours += 1;
          this.minutes = 0;
        }
      }
    }
  }
}

export default Timer;
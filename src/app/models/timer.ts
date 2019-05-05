interface TimerInterface {
  interval: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export default class Timer implements TimerInterface {
  interval: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;

  constructor() {
    this.interval = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }

  start() {
    this.interval = setInterval(() => {
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
    this.milliseconds += 5;
  });
  }

  pause() {
    if (this.interval) {
      clearInterval(this.interval);
      delete this.interval;
    }
  }

  reset() {
    this.pause();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
  }
}

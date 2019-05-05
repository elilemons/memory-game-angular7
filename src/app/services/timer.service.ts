import { Injectable } from '@angular/core';
import Timer from '../models/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timer: Timer;

  init() {
    this.timer = new Timer();
  }

  isRunning(): boolean{
    console.log('this.timer.interval: ', this.timer.interval);
    return this.timer.interval > 0 && this.timer.interval !== undefined;
  }

  startTimer() {
    this.timer.start();
  }

  pauseTimer() {
    this.timer.pause();
  }

  resetTimer() {
    this.timer.reset();
  }
  
  getTimeString(timeType: number, zeroPadStart: number) {
    return timeType.toString().padStart(zeroPadStart, '0');
  }

  getFullTimerString() {
    return `${this.getTimeString(this.timer.hours, 2)}:${this.getTimeString(this.timer.minutes, 2)}:${this.getTimeString(this.timer.seconds, 2)}:${this.getTimeString(this.timer.milliseconds, 3)}`;
  }
}

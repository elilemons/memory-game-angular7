import { Component, Input } from '@angular/core';
import Timer from '../../models/timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Input() timer: Timer;
}

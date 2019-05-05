import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  @Output() started = new EventEmitter<boolean>();
  @Output() paused = new EventEmitter<boolean>();
  @Output() hasReset = new EventEmitter<boolean>();

  start($event): void { this.started.emit(true); }
  pause($event): void { this.paused.emit(true); }
  reset($event): void { this.hasReset.emit(true); }
}

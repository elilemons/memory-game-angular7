import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() showModal: boolean;
  @Input() buttonCancelText: string;
  @Input() buttonSubmitText: string;
  @Input() modalTitle: string;
  @Input() modalContent: string;
  @Output() submitted = new EventEmitter<Boolean>();

  handleSubmitClick(): void {
    this.submitted.emit(true);
  }
}

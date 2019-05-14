import { sandboxOf } from 'angular-playground';
import { ControlsComponent } from '../controls/controls.component';

export default sandboxOf(ControlsComponent)
  .add('default', {
    template: `<app-controls></app-controls>`
  });

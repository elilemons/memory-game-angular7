import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardComponent } from '../modules/card/card.component';
import { GameComponent } from '../modules/game/game.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    CardComponent,
    GameComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})

export class ComponentModule { }
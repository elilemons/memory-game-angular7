import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardComponent } from '../modules/card/card.component';
import { GameComponent } from '../modules/game/game.component';

@NgModule({
  declarations: [
    CardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})

export class ComponentModule { }
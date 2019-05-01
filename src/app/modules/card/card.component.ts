import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import Card from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: Card;
  @Output() flipped = new EventEmitter<Card>();

  handleCardClick(card: Card): void {    
    this.flipped.emit(card);
  }
}

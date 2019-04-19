import { Component, OnInit, Input } from '@angular/core';
import Card from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
    console.log('card initialized', this)
  }
  handleCardClick(card: Card): void {
    card.isFlipped = !card.isFlipped;
  }
}

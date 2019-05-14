import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import Card from '../../models/card';
import { isUndefined } from 'util';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() card: Card;
  @Output() flipped = new EventEmitter<Card>();


  ngOnInit() {
    // const IMAGE_DIR: string = '../../assets/images';
    // if (isUndefined(this.card)) {
    //   this.card = {
    //     id: 1,
    //     name: "Mock",
    //     image: `${IMAGE_DIR}/kittens/1.png`,
    //     isFlipped: true,
    //     isMatched: true,
    //     order: 1
    //   }
    // }
  }
  handleCardClick(card: Card): void {
    this.flipped.emit(card);
  }
}

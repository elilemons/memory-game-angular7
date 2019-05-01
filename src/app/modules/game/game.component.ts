import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service.service';
import Card from 'src/app/models/card';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  host: {
    class:'card-grid'
  }
})
export class GameComponent implements OnInit {
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.init(10);
  }
  
  onFlipped(card: Card) {
    if (card.isMatched) { return; }
    if (this.cardService.flipCard(card)) {
      this.handleWin();
    }
  }

  handleWin() {
    console.log('you won');
  }
}

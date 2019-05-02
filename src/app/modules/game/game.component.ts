import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card-service.service';
import Card from 'src/app/models/card';
import Timer from 'src/app/models/timer';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  host: {
    class:'card-grid'
  }
})
export class GameComponent implements OnInit {
  private timer: Timer = new Timer();
  private won: boolean;
  private showModal: boolean;
  private modalButtonSubmitText: string;
  private modalTitle: string;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.init(10);
  }
  
  onFlipped(card: Card): void {
    if (card.isMatched) { return; }
    if (this.cardService.flipCard(card)) {
      this.handleWin();
    }
  }

  handleWin(): void {
    this.won = true;
    this.showModal = true;
    this.modalTitle = 'You\'ve won!';
    this.modalButtonSubmitText = 'SCHWEEET';
  }

  onModalSubmit(): void {
    this.showModal = false;
  }

  onStart(): void {
    // TODO Set up interval
    // this.timer.start();
    console.log('Game start');
  }
  onPause(): void {
    console.log('Game paused');
  }
  onReset(): void {
    console.log('Game reset');
  }
}

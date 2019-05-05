import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { TimerService } from 'src/app/services/timer.service';
import Card from 'src/app/models/card';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  won: boolean;
  userPaused: boolean;
  showModal: boolean;
  modalButtonSubmitText: string;
  modalTitle: string;
  modalContent: string;
  private numOfCards: number = 10;
  constructor(
    private cardService: CardService,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.cardService.init(this.numOfCards);
    this.timerService.init();
  }
  
  onFlipped(card: Card): void {
    if (card.isMatched) { return; }
    if (this.cardService.flipCard(card)) {
      this.handleWin();
    }
  }

  handleWin(): void {
    this.timerService.pauseTimer();

    this.won = true;
    this.userPaused = false;

    this.showModal = true;
    this.modalTitle = 'You\'ve won!';
    this.modalButtonSubmitText = 'SCHWEEET';
    this.modalContent = `Your time was: ${this.timerService.getFullTimerString()}.`;
  }

  onModalSubmit(): void {
    this.showModal = false;
    if (this.userPaused) { 
      this.userPaused = false;
      this.timerService.startTimer(); 
    }
  }

  onStart(): void {
    this.timerService.startTimer();
  }

  onPause(): void {    
    if (this.userPaused) { return; }
    
    this.timerService.pauseTimer();
    this.userPaused = true;

    this.showModal = true;
    this.modalTitle = 'You\'ve paused the game.';
    this.modalContent = 'Click resume to continue.';
    this.modalButtonSubmitText = 'Resume';
  }

  onReset(): void {
    this.timerService.resetTimer();
    this.cardService.init(this.numOfCards);
  }
}

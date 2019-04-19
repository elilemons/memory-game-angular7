import { Component, OnInit, Input } from '@angular/core';
import { CardComponent } from '../../modules/card/card.component';
import { CardService } from '../../services/card-service.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cardService.init(10);
  }

}

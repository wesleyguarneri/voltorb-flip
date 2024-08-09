import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { GameCard } from '../../models/game-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,CardComponent,MatGridListModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

    cards: GameCard[] = [
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
      {value:1},{value:1},{value:1},{value:1},{value:1},{value:1},
    ]

    constructor(){}

    ngOnInit(){}
}

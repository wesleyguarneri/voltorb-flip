import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { GameCard } from '../../models/game-card';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,CardComponent,MatGridListModule,MatCardModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

    cards: GameCard[] = []

    constructor(){}

    ngOnInit(){
      let i = 0;
      while(i<36){
        this.cards.push({value:1,isFlipped:false,backImage:'',frontImage:''})
        i+=1
      }
    }

    flipCard(index: any){
      this.cards[index].isFlipped=true
      console.log(this.cards[index])
    }
}

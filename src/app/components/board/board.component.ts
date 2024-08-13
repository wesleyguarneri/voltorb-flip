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
    levels = {
      "1": [[5, 0, 6], [4, 1, 6], [3, 1, 6], [2, 2, 6], [0, 3, 6]],
      "2": [[6, 0, 7], [5, 1, 7], [3, 2, 7], [1, 3, 7], [0, 4, 7]],
      "3": [[7, 0, 8], [6, 1, 8], [4, 2, 8], [2, 3, 8], [1, 4, 8]],
      "4": [[8, 0, 10], [5, 2, 10], [3, 3, 8], [2, 4, 10], [0, 5, 8]],
      "5": [[9, 0, 10], [7, 1, 10], [6, 2, 10], [4, 3, 10], [1, 5, 10]],
      "6": [[8, 1, 10], [5, 3, 10], [3, 4, 10], [2, 5, 10], [0, 6, 10]],
      "7": [[9, 1, 13], [7, 2, 10], [6, 3, 10], [4, 4, 10], [1, 6, 13]],
    }

    constructor(){}

    ngOnInit(){
      let i = 0;
      while(i<36){
        if(((i+1)%6 == 0) || i>=30){
          this.cards.push({value:1,type:'info',isFlipped:false,backImage:'',frontImage:'/assets/voltorb.png'})
        }
        else{
          this.cards.push({value:1,type:'game',isFlipped:false,backImage:'/assets/icons/large-1.svg',frontImage:'/assets/blanktile.svg'})
        }
        i+=1
      }
    }

    createCardGrid(){

    }

    flipCard(index: number) {
      this.cards[index].isFlipped = !this.cards[index].isFlipped;
    }    
  
    getFlipState(isFlipped: boolean) {
      return isFlipped ? 'flipped' : 'default';
    }
}

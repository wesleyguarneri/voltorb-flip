import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { GameCard } from '../../models/game-card';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ResultModalComponent } from '../result-modal/result-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule,CardComponent,MatGridListModule,MatCardModule,ResultModalComponent,MatButtonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

    cards: GameCard[] = []
    boardConfigs = [
      [5, 0, 6], [4, 1, 6], [3, 1, 6], [2, 2, 6], [0, 3, 6],
      [5, 0, 6], [4, 1, 6], [3, 1, 6], [2, 2, 6], [0, 3, 6],
      [6, 0, 7], [5, 1, 7], [3, 2, 7], [1, 3, 7], [0, 4, 7],
      [6, 0, 7], [5, 1, 7], [3, 2, 7], [1, 3, 7], [0, 4, 7],
      [7, 0, 8], [6, 1, 8], [4, 2, 8], [2, 3, 8], [1, 4, 8],
      [7, 0, 8], [6, 1, 8], [4, 2, 8], [2, 3, 8], [1, 4, 8],
      [8, 0, 10], [5, 2, 10], [3, 3, 8], [2, 4, 10], [0, 5, 8],
      [8, 0, 10], [5, 2, 10], [3, 3, 8], [2, 4, 10], [0, 5, 8],
      [9, 0, 10], [7, 1, 10], [6, 2, 10], [4, 3, 10], [1, 5, 10],
      [9, 0, 10], [7, 1, 10], [6, 2, 10], [4, 3, 10], [1, 5, 10],
      [8, 1, 10], [5, 3, 10], [3, 4, 10], [2, 5, 10], [0, 6, 10],
      [8, 1, 10], [5, 3, 10], [3, 4, 10], [2, 5, 10], [0, 6, 10],
      [9, 1, 13], [7, 2, 10], [6, 3, 10], [4, 4, 10], [1, 6, 13],
      [9, 1, 13], [7, 2, 10], [6, 3, 10], [4, 4, 10], [1, 6, 13],
      [0, 7, 10], [8, 2, 10], [5, 4, 10], [2, 6, 10], [7, 3, 10],
      [0, 7, 10], [8, 2, 10], [5, 4, 10], [2, 6, 10], [7, 3, 10]
    ]
    colorArray=['#f86a47','#00b02d','#fca100','#0097ff','#d55cee']
    level:number =  8
    openResultModal:boolean = false;
    twoPointCount: number = 0
    threePointCount: number = 0
    pointData: number[] = []

    constructor(public dialog: MatDialog){}

    ngOnInit(){
      this.generateBoard()
    }

    generateBoard(){
      let i = 0;
      this.twoPointCount = 0
      this.threePointCount = 0
      this.cards = []

      while(i<35){
        if(((i+1)%6 == 0) || i>=30){
          this.cards.push({value:'0',type:'info',isFlipped:false,backImage:'',frontImage:'./assets/voltorbs/voltorb.png'})
        }
        else{
          this.cards.push({value:'1',type:'flip',isFlipped:false,backImage:'./assets/numbers/large-1.svg',frontImage:'./assets/blanktile.svg'})
        }
        i+=1
      }

      let randNum = this.getRandomNumber(0,123456789)
      let levelMultiplier = (this.level-1)*10
      randNum = Math.ceil((randNum % 100)/10)
      let boardNum = randNum-1+levelMultiplier
      this.pointData = this.boardConfigs[boardNum]
      let cardIdx: number
      
      console.log(this.pointData)
      // Set 2 points
      i = 0;
      while(i<this.pointData[0]){
        cardIdx = this.getRandomNumber(0,123456789) % 25
        if(this.cards[cardIdx].value == '1'){
          this.cards[cardIdx].value = '2'
          this.cards[cardIdx].backImage = './assets/numbers/large-2.svg'
          i++
        }
      }

      // Set 3 points
      i = 0
      while(i<this.pointData[1]){
        cardIdx = this.getRandomNumber(0,123456789) % 25
        if(this.cards[cardIdx].value == '1'){
          this.cards[cardIdx].value = '3'
          this.cards[cardIdx].backImage = './assets/numbers/large-3.svg'
          i++
        }
      }

      // Set bomb value
      i = 0
      while(i<this.pointData[2]){
        cardIdx = this.getRandomNumber(0,123456789) % 25
        if(this.cards[cardIdx].value == '1'){
          this.cards[cardIdx].value = '0'
          this.cards[cardIdx].backImage = './assets/voltorbs/voltorb_large.png'
          i++
        }
      }
    }

    getRowSums(index:number){
      let rowSums = 0
      let bombSums = 0
      for(var i = index-5; i<index; i++){
        let card = this.cards[i]
        if(card.value == '0' && card.type == 'flip'){
          bombSums+=1
        }
        rowSums += parseInt(card.value)
      }

      return {'rowSum':rowSums.toString().padStart(2, '0'),'bombSum':bombSums.toString().padStart(2, '0')}
    }

    getColSums(index:number){
      let colSums = 0
      let bombSums = 0
      let startIdx=index-30

      for(var i = startIdx; i<index; i+=6){
        let card = this.cards[i]
        if(card.value == '0' && card.type == 'flip'){
          bombSums+=1
        }
        colSums += parseInt(card.value)
      }
      return {'colSum':colSums.toString().padStart(2, '0'),'bombSum':bombSums.toString().padStart(2, '0')}
    }

    getRandomNumber(min, max) { 
      return Math.floor(Math.random() * (max-min+1)+min);
    }

    flipCard(index: number) {
      this.cards[index].isFlipped = !this.cards[index].isFlipped;

      if(this.cards[index].value == '0'){
        const dialogRef = this.dialog.open(ResultModalComponent, {
          height: '200px',
          width: '300px',
          data: {
            result: 'loss'
          }
        });

        dialogRef.afterClosed().subscribe(result => {
          this.flipAllCards(true)

          setTimeout(() => {
            this.flipAllCards(false).then(() => {
              setTimeout(() => {this.generateBoard()},500);
            });
          }, 2000);
        });
      }
      else if(this.cards[index].value == '2'){
        this.twoPointCount+=1
      }
      else if(this.cards[index].value == '3'){
        this.threePointCount+=1
      }

      if(this.twoPointCount == this.pointData[0] && this.threePointCount == this.pointData[1]){
        const dialogRef = this.dialog.open(ResultModalComponent, {
          height: '200px',
          width: '300px',
          data: {
            result: 'win'
          }
        });
        dialogRef.afterClosed().subscribe(result => {
          this.flipAllCards(true)

          setTimeout(() => {
            this.flipAllCards(false).then(() => {
              setTimeout(() => {this.generateBoard()},500);
            });
          }, 2000);
        });
      }
    }    
  
    flipAllCards(flipState: boolean): Promise<void> {
      return new Promise((resolve) => {
        this.cards.forEach(card => {
          card.isFlipped = flipState;
        });
        resolve();
      });
    }
    

    getFlipState(isFlipped: boolean) {
      return isFlipped ? 'flipped' : 'default';
    }
}

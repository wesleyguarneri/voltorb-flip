import { Component } from '@angular/core';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss'
})
export class ScoreBoardComponent {
  totalCoins = 0
  currentCoins = 0
  constructor(public coinService: CoinService){}


  ngOnInit(){
    this.totalCoins = this.coinService.totalCoins
    this.currentCoins = this.coinService.currentCoins
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  _totalCoins: number = 0;
  _currentCoins: number = 0;

  constructor() { }

  get totalCoins(){
    return this._totalCoins
  }

  set totalCoins(val: number){
    this._totalCoins = val
  }
  
  get currentCoins(){
    return this._currentCoins
  }

  set currentCoins(val: number){
    this._currentCoins = val
  }
}

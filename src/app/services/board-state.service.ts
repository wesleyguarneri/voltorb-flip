import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }

  private _state: string;

  setState(value: string): void {
    this._state = value;
  }

  getState(): any {
    return this._state;
  }
}

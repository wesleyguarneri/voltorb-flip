import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BoardStateService } from '../../services/board-state.service';

@Component({
  selector: 'app-memo-button',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatGridListModule,],
  templateUrl: './memo-button.component.html',
  styleUrl: './memo-button.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0
      })),
      transition('open => closed', [
        style({transform: 'translateY(0%)'}),
        animate('200ms ease-in', style({transform: 'translateY(-100%)',opacity: 0}))
      ]),
      transition('closed => open', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)',opacity: 1}))
      ]),
    ]),
  ],
})
export class MemoButtonComponent {

  isOpen: boolean = false;

  constructor(
    private boardState: BoardStateService
  ){}

  ngOnInit(){}
  
  toggleMemoButton(){
    this.isOpen = !this.isOpen
  }

  setBoardState(state: string){
    this.boardState.setState(state)
  }
}

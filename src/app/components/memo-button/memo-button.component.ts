import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BoardStateService } from '../../services/board-state.service';
import { MemoIconButtonComponent } from '../memo-icon-button/memo-icon-button.component';

@Component({
  selector: 'app-memo-button',
  standalone: true,
  imports: [MatButtonModule,CommonModule,MatGridListModule,MemoIconButtonComponent],
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
      state('open-mobile', style({
        opacity: 1
      })),
      state('closed-mobile', style({
        opacity: 0
      })),
      transition('open-mobile => closed-mobile', [
        style({transform: 'translateX(0%)'}),
        animate('200ms ease-in', style({transform: 'translateX(-100%)',opacity: 0}))
      ]),
      transition('closed-mobile => open-mobile', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)',opacity: 1}))
      ]),
    ]),
  ],
})
export class MemoButtonComponent {
  isOpen: boolean = false;
  isMobile: boolean = false;

  constructor(
    private boardState: BoardStateService
  ){}

  ngOnInit(){
    this.checkScreenWidth();
    console.log(this.isMobile)
  }
  
  toggleMemoButton(){
    this.isOpen = !this.isOpen
  }

  setBoardState(state: string){
    if(this.boardState.getState()=='default'){
      this.boardState.setState(state)
    }
    else{
      this.boardState.setState('default')
    }
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth < 400;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = event.target.innerWidth < 400;
  }
}

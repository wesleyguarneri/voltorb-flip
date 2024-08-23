import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-memo-button',
  standalone: true,
  imports: [MatButtonModule,CommonModule],
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
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)',opacity: 0}))
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

  constructor(){}

  ngOnInit(){}
  
  toggleMemoButton(){
    this.isOpen = !this.isOpen
  }
}

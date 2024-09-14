import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { MemoButtonComponent } from '../memo-button/memo-button.component';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [BoardComponent,MemoButtonComponent,],
  templateUrl: './game-screen.component.html',
  styleUrl: './game-screen.component.scss'
})
export class GameScreenComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GameScreenComponent,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flip-game';
}

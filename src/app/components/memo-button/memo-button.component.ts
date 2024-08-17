import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-memo-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './memo-button.component.html',
  styleUrl: './memo-button.component.scss'
})
export class MemoButtonComponent {

}

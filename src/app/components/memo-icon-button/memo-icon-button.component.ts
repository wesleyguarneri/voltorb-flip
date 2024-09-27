import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-memo-icon-button',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './memo-icon-button.component.html',
  styleUrl: './memo-icon-button.component.scss'
})
export class MemoIconButtonComponent {

  @Input()
  set param(p: any) {
    this.cardValue = p
  }

  cardValue: string;
  urlSource: string;

  ngOnInit(){
    this.urlSource = './assets/memo/large-'+this.cardValue+'.svg'
  }
}

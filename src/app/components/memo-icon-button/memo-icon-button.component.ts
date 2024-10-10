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
  isActive: boolean = false;

  ngOnInit(){
    this.urlSource = './assets/memo/large-'+this.cardValue+'.svg'
  }

  toggleActiveIcon(){
    this.isActive = !this.isActive

    if(this.isActive){
      this.urlSource = './assets/memo/large-'+this.cardValue+'-active.svg'
    }
    else{
      this.urlSource = './assets/memo/large-'+this.cardValue+'.svg'
    }
  }

  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    
  ]
})

export class AppModule { 
}

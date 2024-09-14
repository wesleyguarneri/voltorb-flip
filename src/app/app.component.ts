import { Component, importProvidersFrom, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const iconMemo0 = `<svg height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg"><path d="m80 40v40h-40-40v120 120h40 40v40 40h120 120v-40-40h40 40v-120-120h-40-40v-40-40h-120-120z" fill="#fcd444"/></svg>`
const iconMemo1 = `<svg height="400" viewBox="0 0 320 400" width="320" xmlns="http://www.w3.org/2000/svg"><path d="m0 40v40h40 40v120 120h-40-40v40 40h160 160v-40-40h-40-40v-160-160h-120-120z" fill="#fcd444"/></svg>`
const iconMemo2 = `<svg height="400" viewBox="0 0 320 400" width="320" xmlns="http://www.w3.org/2000/svg"><path d="m0 40v40h80 80v40 40h-80-80v120 120h160 160v-40-40h-80-80v-40-40h80 80v-120-120h-160-160z" fill="#fcd444"/></svg>`
const iconMemo3 = `<svg height="400" viewBox="0 0 320 400" width="320" xmlns="http://www.w3.org/2000/svg"><path d="m0 40v40h80 80v40 40h-80-80v40 40h80 80v40 40h-80-80v40 40h160 160v-200-200h-160-160z" fill="#fcd444"/></svg>`

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GameScreenComponent,MatToolbarModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(){
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIconLiteral(
      "memo0",
      sanitizer.bypassSecurityTrustHtml(iconMemo0)
    );
    iconRegistry.addSvgIconLiteral(
      "memo1",
      sanitizer.bypassSecurityTrustHtml(iconMemo1)
    );
    iconRegistry.addSvgIconLiteral(
      "memo2",
      sanitizer.bypassSecurityTrustHtml(iconMemo2)
    );
    iconRegistry.addSvgIconLiteral(
      "memo3",
      sanitizer.bypassSecurityTrustHtml(iconMemo3)
    );
  }
  title = 'flip-game';
}

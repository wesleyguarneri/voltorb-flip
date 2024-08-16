import { Component, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss'
})
export class ResultModalComponent {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ResultModalComponent>
  ){}

  ngOnInit(){

  }

  onClose(): void {
    this.dialogRef.close();
  }

}

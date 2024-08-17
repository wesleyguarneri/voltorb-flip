import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-result-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './result-modal.component.html',
  styleUrl: './result-modal.component.scss'
})
export class ResultModalComponent {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ResultModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ){}

  ngOnInit(){
    console.log(this.data)
  }

  onClose(): void {
    this.dialogRef.close();
  }

}

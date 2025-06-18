import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-dialogbox-content',
  templateUrl: './dialogbox-content.component.html',
  styleUrls: ['./dialogbox-content.component.css'],
    // imports: [ZXingScannerModule, MatDialogModule, CommonModule]
  // standalone : true
})
export class DialogboxContentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogboxContentComponent>) {}

 
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-future',
  templateUrl: './date-future.component.html',
  styleUrls: ['./date-future.component.css'],
  providers:[DatePipe]
})
export class DateFutureComponent  {
  today = new Date();

  form = new FormGroup({
    date: new FormControl()
  });

  formatted: {
    ddMMYYYY?: string;
    ddSlashMMYYYY?: string;
    ddMMMYYYY?: string;
  } | null = null;

  constructor(private datePipe: DatePipe) {}

  showFormattedDateinfuture() {
    const rawDate = this.form.get('date')?.value;
    if (!rawDate) {
      this.formatted = null;
      alert("Please select the date")
      return;
    }
    
    this.formatted = {
      ddMMYYYY: this.datePipe.transform(rawDate, 'dd-MM-yyyy') || '',
      ddSlashMMYYYY: this.datePipe.transform(rawDate, 'dd/MM/yyyy') || '',
      ddMMMYYYY: this.datePipe.transform(rawDate, 'dd-MMM-yyyy') || ''
    };
  }
}

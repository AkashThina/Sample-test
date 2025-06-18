import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-operation',
  templateUrl: './date-operation.component.html',
  styleUrls: ['./date-operation.component.css'],
  providers: [DatePipe] // only needed in Angular <15
})
export class DateOperationComponent {
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
  showFormattedDateinpast() {
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

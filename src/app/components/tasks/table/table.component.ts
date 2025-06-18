import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [{ provide: DatePipe }]
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = [
    'quotationID',
    'insuranceCompanyName',
    'productTypeName',
    'totalPremium',
    'totalCoverAmount',
    'quotationOn'
  ];

  fullData: any[] = [];       // All data

  startDate: string = '';
  endDate: string = '';
  today: Date = new Date();

 

  constructor(private rest: RestService, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAllData('');
  }

  getAllData(payload: any) {
    this.rest.getAllQuatation(payload).subscribe({
      next: (data: any) => {
        this.fullData = data.rObj.getAllQuotation;
        this.updatePaginatedData();
      },
      error: (err) => console.log(err)
    });
  }
  filterByDate(): void {
    const start = this.datePipe.transform(this.startDate, 'dd-MMM-yyyy');
    const end = this.datePipe.transform(this.endDate, 'dd-MMM-yyyy');

    if (!start || !end) {
      console.error('Invalid date format');
      return;
    }

    const payload = {
      startDate: start,
      endDate: end
    };

    this.getAllData(payload);
  }


  // pagination codes
  paginatedData: any[] = [];  // Sliced data for current page

  pageSize: number = 5;
  pageIndex: number = 0;
  pageOffset = 0;
  maxVisiblePages = 4;
  updatePaginatedData(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.fullData.slice(start, end);
  }

 goToPage(page: number): void {
  this.pageIndex = page;

  // 👇 Update pageOffset so current page appears in visible set
  const totalPages = this.getTotalPages();
  const max = this.maxVisiblePages;

  if (page < this.pageOffset) {
    this.pageOffset = Math.floor(page / max) * max;
  } else if (page >= this.pageOffset + max) {
    this.pageOffset = Math.min(totalPages - max, Math.floor(page / max) * max);
  }

  this.updatePaginatedData();
}


  getTotalPages(): number {
    return Math.ceil(this.fullData.length / this.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.getTotalPages();
    const end = Math.min(this.pageOffset + this.maxVisiblePages, totalPages);
    const start = this.pageOffset;
    return Array.from({ length: end - start }, (_, i) => start + i);
  }


  isFirstPage(): boolean {
    return this.pageIndex <= 0 || this.getTotalPages() === 0;
  }

  isLastPage(): boolean {
    const totalPages = this.getTotalPages();
    return totalPages === 0 || this.pageIndex >= totalPages - 1;
  }


  
  previousPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.updatePaginatedData();

      // Update visible page buttons if we move before the current set
      if (this.pageIndex < this.pageOffset) {
        this.pageOffset = Math.max(0, this.pageOffset - this.maxVisiblePages);
      }
    }
  }

  nextPage(): void {
    if (this.pageIndex < this.getTotalPages() - 1) {
      this.pageIndex++;
      this.updatePaginatedData();

      // Update visible page buttons if we move past the current set
      if (this.pageIndex >= this.pageOffset + this.maxVisiblePages) {
        this.pageOffset += this.maxVisiblePages;
      }
    }
  }
  showNextPageSet(): void {
    const totalPages = this.getTotalPages();
    if (this.pageOffset + this.maxVisiblePages < totalPages) {
      this.pageOffset += this.maxVisiblePages;

      // Jump to first page in next set
      this.pageIndex = this.pageOffset;
      this.updatePaginatedData();
    }
  }

  showPrevPageSet(): void {
    if (this.pageOffset >= this.maxVisiblePages) {
      this.pageOffset -= this.maxVisiblePages;

      // Jump to first page in previous set
      this.pageIndex = this.pageOffset;
      this.updatePaginatedData();
    }
  }


}

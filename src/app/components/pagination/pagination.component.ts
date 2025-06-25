import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent  {
 numbers = [
  1,2,3,4,5,6,7,8,9,10,11
];

  currentPage = 1;
  itemsPerPage = 2;

  get totalPages(): number {
    return Math.ceil(this.numbers.length / this.itemsPerPage);
  }

  get paginatedItems(): number[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.numbers.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

 nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
  } else {
    alert("No data found"); 
  }
}
  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }
  
// get visiblePages(): number[] {
//   const total = this.totalPages;
//   const start = Math.floor((this.currentPage - 1) / 4) * 4 + 1;
//   const end = Math.min(start + 3, total);

//   const pages = [];
//   for (let i = start; i <= end; i++) {
//     pages.push(i);
//   }
//   return pages;
// }

}

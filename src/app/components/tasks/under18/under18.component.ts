import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-under18',
  templateUrl: './under18.component.html',
  styleUrls: ['./under18.component.css']
})
export class Under18Component {
  today: Date = new Date();  // Current date
  maxDate: Date;  // Date 18 years ago

  constructor() {
    this.maxDate = this.calculateMaxDate();
  }
   

  // Calculate the max date that is 18 years ago
  calculateMaxDate(): Date {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);  // Subtract 18 years from the current date
    return date;
  }
isMobile = false;
 
  @HostListener('window:resize')
  onResizee() {
    this.isMobile = window.innerWidth <= 1024;
  }
 

  ngAfterViewInit() {
  this.updateScreenWidth();
} 

  ngOnInit() {
    this.onResizee(); // Detect screen size on init
     this.updateScreenWidth();
  }
 
  @ViewChild('Input') searchInput!: ElementRef
    showInput = false;
  screenWidth: number = window.innerWidth;
 
  @HostListener('window:resize')
  onResize() {
    this.updateScreenWidth();
    if(this.screenWidth >= 768){
      // this.showInput = false;
      const searchBar = this.searchInput.nativeElement as HTMLInputElement
       searchBar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
      searchBar.style.setProperty('background-color', 'white', 'important');
      console.log(this.searchInput.nativeElement);
    }else{
      this.showInput = false;
      const searchBar = this.searchInput.nativeElement as HTMLInputElement
      searchBar.style.boxShadow= 'none';
      searchBar.style.setProperty('background-color', 'none', 'important');
      // searchBar.style.width = '30px';
       console.log("sdsfgh")
    }
  }
  updateScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 768) {
      this.showInput = false;
    }
  }
  toggleSearch() {
    this.showInput = !this.showInput;
     if(this.screenWidth >= 768){
      const searchBar = this.searchInput.nativeElement as HTMLInputElement
       searchBar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
       searchBar.style.setProperty('background-color', 'white', 'important');
    }
  }
}

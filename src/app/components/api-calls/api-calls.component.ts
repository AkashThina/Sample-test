import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.css']
})
export class ApiCallsComponent implements OnInit {
  makes: any[] = [];
  models: any[] = [];
  selectedMakeId:string=''  
  selectedModelId: any = '';
  customMake: string = ''; 
   customModel: string = ''

  constructor(private RestServices: RestService) { }

  ngOnInit(): void {
    this.getMake();
    this.numbeerss()
  }

  getMake() {
    this.RestServices.MakeDate().subscribe({
      next: (data: any) => {
        console.log('API data:', data);
        this.makes = data.rObj.getAllMake;
        console.log('Makes array:', this.makes);
      },
      error: (err) => {
        console.log('API data error:', err);
      }
    });
  }

  onMakeChange() {
    console.log('Selected Make ID:', this.selectedMakeId);  // Check value
    if (this.selectedMakeId === 'Others') {
      console.log('User selected Others');
    } else {
      let Search = this.makes.filter(item => item.makeName == this.selectedMakeId);
      console.log(Search);
    
      this.RestServices.getModelsByMakeId(Search[0]).subscribe({
        next: (data: any) => {
          console.log('Model data:', data);
          this.models = data.rObj.getAllModel;
        },
        error: (err) => {
          console.log('Model API Error:', err);
        }
      });
    }
  }
numbers: number[] = [];
numbeerss(){
  for(let i = 1 ; i<=100 ; i++){
    this.numbers.push(i)
  }
}
currentPage = 0;
pageSize = 10;

nextPage() {
  if ((this.currentPage + 1) * this.pageSize < this.numbers.length) {
    this.currentPage++;
  }
}

prevPage() {
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}

}

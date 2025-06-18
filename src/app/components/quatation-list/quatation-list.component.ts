import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-quatation-list',
  templateUrl: './quatation-list.component.html',
  styleUrls: ['./quatation-list.component.css']
})
export class QuatationListComponent implements OnInit {
  
  quotationID!: number;
  quotationData: any;
  constructor(private Router : ActivatedRoute,private RestService:RestService) { }

  ngOnInit(): void {
    const id = this.Router.snapshot.paramMap.get('id');

    this.RestService.getAllQuatation({}).subscribe((res: any) => {
      // Find the matching quotation
      this.quotationData = res.rObj.getAllQuotation.find((item: any) => item.quotationID === id);
      console.log('Matched Quotation Data:', this.quotationData);
    });
  }

}

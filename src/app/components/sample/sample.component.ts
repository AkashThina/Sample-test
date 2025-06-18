import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderservicesService } from 'src/app/services/loaderservices.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  posts: any[] = [];
  isLoggedIn: boolean = false;
 


  constructor(
    private restService: RestService,
    private router: Router,
    public loaderService:LoaderservicesService
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
  
   
  }

  fetchData(): void {
    this.loaderService.show();
  
    this.restService.getData().subscribe({
      next: (data) => {
        setTimeout(() => {
          console.log(data);
          this.loaderService.hide();
        }, 1000); // 1-second delay
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.loaderService.hide();
        this.router.navigate(['/unauthorized']);
      }
    });
  }
  
}

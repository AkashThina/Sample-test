import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent  {
  isLoggedIn = false;

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    this.isLoggedIn = !!token;
  }
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
}

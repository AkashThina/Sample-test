import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false; 

 constructor() {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('authToken');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}

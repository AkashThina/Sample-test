import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,public service : AuthService) {}
  ngOnInit(): void {
    this.service.checkLoginStatus();
  }

  logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out ?');
  
    if (confirmLogout) {
      try {
        localStorage.removeItem('authToken');
        this.service.isLoggedIn = false; // Update login state
        this.router.navigate(['/login']); // Redirect to login page
        console.log('User logged out successfully.');
      } catch (error) {
        console.error('An error occurred during logout:', error);
        alert('Something went wrong while logging out. Please try again.');
      }
    } 
    else
    {
      console.log('Logout canceled');
    }
  }
  

}

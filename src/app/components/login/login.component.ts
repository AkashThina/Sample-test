import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private service : AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    try 
    {
      const { email, password } = this.loginForm.value;
  
      if (email === 'akash@gmail.com' && password === '12345') 
      {
        const testToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFFNjRBNDNBNDY3MjgyRjhDOUYxQzlEMjE1NjVGOUI2QzVGOTA5OUIiLCJ0eXAiOiJKV1QifQ.eyJzZXNzaW9uSUQiOiI1Y2Y5NmY0Yi0wMTljLTQ2MWMtYWJlZS04YjcyMjkzMDdmZjYiLCJuYmYiOjE3NDYwMTEwMjksImV4cCI6MTc0OTYxMTAyOSwiaWF0IjoxNzQ2MDExMDI5LCJpc3MiOiJCQzcyRTczQUNBQkY0NzcyOEE3RUQ2MTlDREM3OUMwMSIsImF1ZCI6IjRENTIxMkI3QzA3NTQ0OTJCNjZDRDNCRDM1QzFGNzJBIn0.ZuWfTMkuQIhygzMGgBSCdKKxhqjqYw9JCUr-Xg04DZWyTeTVmRuTu035ARhls5fMCwFPvGcRWZPy_M61IGkCFL7lOjzhyWtlUyrU0eWz959KS1lj9p645Ee6v43rhbrux71DCHoEsVDVpVeugxrBCX5lI2gJd3Ucdydiw2-xHP6wxe3HYGs-FFJAAN_3MOkjgkRqELBUbdlie-GwJZ97YTGQ_fAiTo5O42SByLDES-R7xIQzpL--SFaSYRmrUz5luMGZ6-XMefGt9QTiGbXDKxD3lVOQ4CtgXDMvU0oeTXV1fE41u972KWyk7ddZ28olxml_Q8fcDKq2DXwdkemotw';
        localStorage.setItem('authToken', testToken);
        this.service.isLoggedIn = true;
        console.log('Login successful, token set');
        this.router.navigate(['/home']);
      } 
      else 
      {
        alert('You entered wrong email or password');
        this.router.navigate(['/**']);
        console.log('Invalid credentials');
      }
    } 
    catch (error)
    {
      console.error('Error during login:', error);
      alert('Something went wrong during login. Please try again.');
    }
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UserParams {
  password?: string,
  email?: string,
  passwordConfirmation?: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  userParams: UserParams = { email: "", password: "" };
  errors = [];

  ngOnInit(): void {
  }

  submit() {
    this.http.post<any>('/api/users', this.userParams).subscribe({
      next: (response) => {
        console.log(response.data);
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        this.errors = error.response.data.errors;
      }
    });
      
  };

}

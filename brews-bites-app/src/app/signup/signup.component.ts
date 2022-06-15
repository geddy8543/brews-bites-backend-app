import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface UserParams {
  name?: string,
  password?: string,
  email?: string,
  passwordConfirmation?: string,
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  newUserParams: UserParams = { name: "", password: "" };
  errors = [];

  ngOnInit(): void {
  }
/**
 * This function posts to api/users and will redirect to login if no errors
 */
  submit() {
    this.http.post<any>('/api/users', this.newUserParams).subscribe({
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

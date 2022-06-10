import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { LoginParams } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) { }

  userParams: LoginParams = { email: "", password: "" };
  errors = [];

  ngOnInit(): void {
  }

  submit() {
    this.authenticationService.login(this.userParams).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl("/welcome");
      },
      error: (error) => {
        this.errors = error.response.data.errors;
      }
    });
      
  };

}

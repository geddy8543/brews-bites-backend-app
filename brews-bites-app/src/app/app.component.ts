import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Brews + Bites';

constructor(private authService: AuthenticationService, private router: Router){}
  isNavbarLoggedIn() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.clearSession();
    this.router.navigateByUrl("/");

  }

}



import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

// This HTTPInterceptor (https://angular.io/api/common/http/HttpInterceptor) adds the JWT token into each and every request
// when that token exists in SessionStorage.

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.authService.getToken()}`,
        },
      });
    }
    return next.handle(request);
  }
}

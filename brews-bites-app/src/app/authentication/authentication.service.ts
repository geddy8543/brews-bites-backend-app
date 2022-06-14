import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
export interface LoginParams {
  password: string,
  email: string,
}

interface LoginResponse {
  jwt: string,
  user_id: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(params: LoginParams){
    return this.http.post<LoginResponse>('/api/sessions', params).pipe(
      tap({ 
        next: (response) => {
          sessionStorage.setItem("jwt", response.jwt);
          sessionStorage.setItem("user_id", response.user_id);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwt');
  }

  clearSession() {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("user_id");
  }
}

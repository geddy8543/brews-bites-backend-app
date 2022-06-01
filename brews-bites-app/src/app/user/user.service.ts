import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User{
  id:number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  
  constructor(private http:HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

}

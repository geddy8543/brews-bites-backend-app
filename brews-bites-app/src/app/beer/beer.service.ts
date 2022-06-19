import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './beer.component';
import { NewBeer } from '../new-beer/new-beer.component';

// injectable tells angular that the class is a service and can be injected into components
@Injectable({
  providedIn: 'root'
})

export class BeerService {
  // gets beer data from ruby backend and makes it available to angular app
  private apiUrl = 'http://localhost:3000/beers';

  //parameterized constructor that injects dependency http client in order to execute functions
  constructor(private http:HttpClient) {}

  //get request to return all beers to the user
  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.apiUrl);
  }
 
  // post request to add a beer created by user with the form
  postBeers(newBeer: NewBeer): Observable<Beer> {
    return this.http.post<Beer>(this.apiUrl, newBeer);
  }
}

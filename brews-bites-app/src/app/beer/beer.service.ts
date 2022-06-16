import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './beer.component';
import { NewBeer } from '../new-beer/new-beer.component';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private apiUrl = 'http://localhost:3000/beers';

  
  constructor(private http:HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.apiUrl);
  }

  postBeers(newBeer: NewBeer): Observable<Beer> {
    return this.http.post<Beer>(this.apiUrl, newBeer);
  }
}
// make get request for 1 beer with id //
// make post requests and delete requests//
// put actions in beer component ts //
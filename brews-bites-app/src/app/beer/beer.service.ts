import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Beer{
  id:number;
}

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  
  constructor(private http:HttpClient) {}

  getBeers(): Observable<Beer> {
    return this.http.get<Beer>("http://localhost:3000/beers");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe{
  id:number;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) {}

  getRecipes(): Observable<Recipe> {
    return this.http.get<Recipe>("http://localhost:3000/recipes");
  }
}

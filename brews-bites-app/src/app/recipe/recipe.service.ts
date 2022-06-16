import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.component';
import { NewRecipe } from '../new-recipe/new-recipe.component';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recipes';

  constructor(private http:HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  postRecipes(newRecipe: NewRecipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, newRecipe);
  }
}

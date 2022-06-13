import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { RecipeService } from './recipe.service';

export interface Recipe {
  recipeId: "";
  title: "";
  ingredients: Text;
  instructions: Text;
  imageUrl: "";
  beerPairing: number;

}
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeResponse: BehaviorSubject<any> = new BehaviorSubject([]);
  recipes: BehaviorSubject<any> = new BehaviorSubject([]);
  sub: any;
  recipeParams: any;
  
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes() {
    this.recipeService.getRecipes().subscribe(
      (response: any) => {
        this.recipeResponse.next(response);
      },
      (error: any) => console.log(error),
      () => {
        this.recipes.next(this.recipeResponse.value)
        console.log(this.recipeResponse.value)
      }
    )
  }

}

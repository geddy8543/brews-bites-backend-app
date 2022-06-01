import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeResponse: BehaviorSubject<any> = new BehaviorSubject([]);
  recipes: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(private recipeService: RecipeService) { }

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

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RecipeService } from './recipe.service';

export interface Recipe {
  recipeId: "";
  title: "";
  description: Text;
  ingredients: Text;
  instructions: Text;
  image_url: "";
  beerPairing: number;

}
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeResponse: BehaviorSubject<any> = new BehaviorSubject([]);
  recipes: Recipe[]=[];
  sub: any;
  selectedRecipe: Recipe | null = null;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.sub = this.recipeService.getRecipes().subscribe({
    next: (recipes) => this.recipes=recipes,  
    })
  }

  handleMoreInfoClick(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe)
  }

  onBack(): void {
    this.selectedRecipe = null;
  }    

}

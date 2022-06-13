import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  pageTitle: string = 'Recipe Details';
  recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    console.log("get recipes")
  }

  onBack(): void {
    this.router.navigate(['/recipe']);
  }

}

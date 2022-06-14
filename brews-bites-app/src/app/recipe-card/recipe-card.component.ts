import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
pageTitle: string = 'Recipe Details';
@Input() recipe?: Recipe;
}


 

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
pageTitle: string = 'Recipe Details';
@Input() recipe!: Recipe;

constructor(private route: ActivatedRoute,
  private router: Router) { }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }    

}


 

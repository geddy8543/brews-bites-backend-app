import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Beer } from '../beer/beer.component';
import { RecipeService } from './recipe.service';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  image_url: string;
  beers: Beer[];

}
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  // memory clean up
  private unSubAll$ = new Subject<void>();

  recipeResponse: BehaviorSubject<any> = new BehaviorSubject([]);
  recipes: Recipe[]=[];
  selectedRecipe: Recipe | null = null;
  
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
    .pipe(takeUntil(this.unSubAll$))
    .subscribe({
      next: (res) => { 
        this.recipes = res;
        this.route.params
          .pipe(takeUntil(this.unSubAll$))
          .subscribe((params) => {
          const selectedRecipeId: number = parseInt(params['id']);
          this.selectedRecipe = this.recipes.find((recipe) => recipe.id === selectedRecipeId) ?? null;
        });
      },
    });
  }

  ngOnDestroy(): void {
    this.unSubAll$.next();
    this.unSubAll$.complete();
  }

  handleMoreInfoClick(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe)
  }

  onBack(): void {
    this.selectedRecipe = null;
  }    

}

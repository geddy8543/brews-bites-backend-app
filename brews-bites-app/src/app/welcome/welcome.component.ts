import { Component, OnInit } from '@angular/core';
import { Beer, BeerService } from '../beer/beer.service';
import { Recipe, RecipeService } from '../recipe/recipe.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  beers: Beer[] = [];
  recipes: Recipe[] = [];

  constructor(private beerService: BeerService, recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getBeers();
    this.getRecipes();
  }

  getBeers(): void {
    // this.beerService.getBeers()
    // .subscribe(beers => this.beers = beers);
    console.log("get beers")
  }

  getRecipes(): void {
    // this.recipeService.getRecipes()
    // .subscribe(recipes => this.recipes = recipes);
    console.log("get recipes")
  }

}

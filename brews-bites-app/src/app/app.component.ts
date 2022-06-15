import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
import { Router } from '@angular/router';
import { BeerService } from './beer/beer.service';
import { RecipeService } from './recipe/recipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Brews + Bites';

constructor(private authService: AuthenticationService, private router: Router, private beerService: BeerService, recipeService: RecipeService){}
  isNavbarLoggedIn() {
    return this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.getBeers();
    this.getRecipes();
  }

  logout() {
    this.authService.clearSession();
    this.router.navigateByUrl("/");

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



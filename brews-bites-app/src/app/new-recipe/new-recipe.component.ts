import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
export interface NewRecipe {
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  image_url: string
}

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  @Output() submitNewRecipe= new EventEmitter<NewRecipe>();
  
  newRecipeParams: NewRecipe = {
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image_url: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewRecipe() {
    this.submitNewRecipe.emit(this.newRecipeParams);
  }

}
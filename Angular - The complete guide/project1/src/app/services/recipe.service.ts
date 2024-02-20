import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/models/recipe.model';
import { Ingredient } from '../recipes/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'description 1', 'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',[new Ingredient('Meat',1) , new Ingredient('Bread',1)]),
    new Recipe('Recipe 2', 'description 2', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/27/18/asset/3af49fdc8a8c/sub-buzz-1600-1590605566-3.jpg', [new Ingredient('Meat',1) , new Ingredient('Bun',5)])
  ];

  showRecipeDetails = new EventEmitter<Recipe>();

  constructor() { }

  get(){
    return this.recipes.slice();
  }
}

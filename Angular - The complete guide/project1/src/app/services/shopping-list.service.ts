import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../recipes/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  get(){
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}

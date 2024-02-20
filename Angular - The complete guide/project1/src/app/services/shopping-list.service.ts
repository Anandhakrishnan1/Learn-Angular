import { Injectable } from '@angular/core';
import { Ingredient } from '../recipes/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  get(){
    return this.ingredients;
  }

  addNewIngredient(ingredient: Ingredient) {
    debugger;
    this.ingredients.push(ingredient);
}
}

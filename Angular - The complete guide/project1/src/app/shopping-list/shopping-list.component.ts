import { Component } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../recipes/models/ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingEditComponent, CommonModule]
})
export class ShoppingListComponent {
    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];
}

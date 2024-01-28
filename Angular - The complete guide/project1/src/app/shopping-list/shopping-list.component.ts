import { Component } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../recipes/models/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingEditComponent]
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];
}

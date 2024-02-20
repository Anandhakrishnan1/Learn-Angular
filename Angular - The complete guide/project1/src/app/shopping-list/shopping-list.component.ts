import { Component, OnInit } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../recipes/models/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingEditComponent, CommonModule]
})
export class ShoppingListComponent implements OnInit {

    ingredients!: Ingredient[];
    constructor(private shoppingListService: ShoppingListService){ }

    ngOnInit(){
        this.ingredients = this.shoppingListService.get();
        this.shoppingListService.ingredientChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients
            }
        );
    }

    // addNewIngredient(ingredient: Ingredient) {
    //     this.ingredients.push(ingredient);
    // }
}

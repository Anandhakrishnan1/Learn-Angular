import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    imports: [RecipeItemComponent, CommonModule]
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Recipe 1', 'description 1', 'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg'),
        new Recipe('Recipe 2', 'description 2', 'https://img.buzzfeed.com/buzzfeed-static/static/2020-05/27/18/asset/3af49fdc8a8c/sub-buzz-1600-1590605566-3.jpg')
    ];

    showDetails(recipe: Recipe) {
        this.showRecipeDetails.emit(recipe);
    }

    @Output() showRecipeDetails = new EventEmitter<Recipe>();
}

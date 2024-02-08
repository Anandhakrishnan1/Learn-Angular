import { Component } from '@angular/core';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './models/recipe.model';

@Component({
    selector: 'app-recipes',
    standalone: true,
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    imports: [RecipeDetailComponent, RecipeListComponent]
})
export class RecipesComponent {
    selectedRecipe!: Recipe;
    
    showRecipeDetails(recipe: Recipe) {
        debugger
        this.selectedRecipe = recipe;
    }

}

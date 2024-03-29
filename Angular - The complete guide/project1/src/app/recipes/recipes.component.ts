import { Component, OnInit } from '@angular/core';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './models/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: 'app-recipes',
    standalone: true,
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    imports: [RecipeDetailComponent, RecipeListComponent, CommonModule]
})
export class RecipesComponent implements OnInit {
    selectedRecipe!: Recipe;

    constructor(private recipeService: RecipeService){}
    
    ngOnInit(): void {
        this.recipeService.showRecipeDetails.subscribe(
            (recipe: Recipe) => {
              debugger
              this.selectedRecipe = recipe
            }
          );
    }
    
    // showRecipeDetails(recipe: Recipe) {
    //     this.selectedRecipe = recipe;
    // }

}

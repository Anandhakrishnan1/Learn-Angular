import { Component } from '@angular/core';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@Component({
    selector: 'app-recipes',
    standalone: true,
    templateUrl: './recipes.component.html',
    styleUrl: './recipes.component.css',
    imports: [RecipeDetailComponent, RecipeListComponent]
})
export class RecipesComponent {

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-list',
    standalone: true,
    templateUrl: './recipe-list.component.html',
    styleUrl: './recipe-list.component.css',
    imports: [RecipeItemComponent, CommonModule]
})
export class RecipeListComponent implements OnInit {

    recipes!: Recipe[];
    // @Output() showRecipeDetails = new EventEmitter<Recipe>();

    showDetails(recipe: Recipe) {
        this.recipeService.showRecipeDetails.emit(recipe);
    }

    constructor(private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit() {
        this.recipes = this.recipeService.get();
    }

    onNewRecipe() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }
}

import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  constructor(private recipeSevice: RecipeService){}

  addToShoppingList() {
    this.recipeSevice.addToShoppingList(this.selectedrecipeItem.ingredients);
  }
  
  @Input() selectedrecipeItem!: Recipe;
}

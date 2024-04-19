import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  id: number = 0;
  selectedrecipeItem!: Recipe;

  constructor(private recipeSevice: RecipeService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedrecipeItem = this.recipeSevice.getRecipe(this.id);
      }
    );

    
  }

  addToShoppingList() {
     this.recipeSevice.addToShoppingList(this.selectedrecipeItem.ingredients);
  }
  
  // @Input() selectedrecipeItem!: Recipe;
}

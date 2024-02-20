import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../recipes/models/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService){}

  // @Output() newIngredient = new EventEmitter<Ingredient>();

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addNewIngredient(new Ingredient(name.value, Number(amount.value)));
  }

}

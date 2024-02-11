import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../recipes/models/ingredient.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    debugger
    console.log(name.value);
    this.newIngredient.emit(new Ingredient(name.value, Number(amount.value)));
  }

}

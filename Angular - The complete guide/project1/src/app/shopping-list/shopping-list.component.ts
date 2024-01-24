import { Component } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@Component({
    selector: 'app-shopping-list',
    standalone: true,
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    imports: [ShoppingEditComponent]
})
export class ShoppingListComponent {

}

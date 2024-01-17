import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  actorsList = [
    {
      id : 1,
      name : 'Mohanlal'
    },{
      id : 2,
      name : 'Mammooty'
    }
  ]
}

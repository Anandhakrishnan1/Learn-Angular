import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { GetActorsService } from './get-actors.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment2';
  actors: any = []

  constructor(private actorsService: GetActorsService){
    this.actors = actorsService.getActorsList()

    console.log(this.actors)
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  id: string|number = 0;
  selectedActorMovies: string[] = [];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.loadMoviesForSelectedActor();
    })
  }

  actorsList = [
    {
      id : 1,
      movies : ['Drishyam', 'Neru', 'Lucifer']
    },{
      id : 2,
      movies : ['Kannur Squad', 'BigB', 'Beeshmaparvam']
    }
  ]

  loadMoviesForSelectedActor() {
    const selectedActor = this.actorsList.find(actor => actor.id === this.id);
    this.selectedActorMovies = selectedActor ? selectedActor.movies : [];
  }

}

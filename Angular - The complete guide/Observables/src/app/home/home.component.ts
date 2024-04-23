import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription!: Subscription;

  ngOnInit(): void {
    this.firstSubscription = interval(1000).subscribe(
      count => {
        console.log(count);
      }
    )
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}

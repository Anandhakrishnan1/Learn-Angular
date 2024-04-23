import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

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
    // this.firstSubscription = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   }
    // )

    const customobservable = Observable.create(
      (observer: { next: (arg0: number) => void; }) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000);
      });

      this.firstSubscription = customobservable.subscribe((data: any) => {
        console.log(data);
      })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}

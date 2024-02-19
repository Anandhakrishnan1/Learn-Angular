import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private counterService: CounterService) { }

  activeUsers = ['Dafny','Vignesh'];
  inactiveUsers = ['Anandhan','jithin'];

  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterService.incrementInActiveToActive();
  }
}

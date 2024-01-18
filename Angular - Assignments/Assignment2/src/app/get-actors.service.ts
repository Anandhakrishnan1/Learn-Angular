import { Injectable } from '@angular/core';
import ActorsList from "./sampleData/actors.json"

@Injectable({
  providedIn: 'root'
})
export class GetActorsService {

  constructor() { }

  getActorsList(){
    return ActorsList
  }
}

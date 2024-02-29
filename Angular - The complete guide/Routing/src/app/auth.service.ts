import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedin = false;

  login(){
    this.loggedin = true;
  }

  logout(){
    this.loggedin = false;
  }

  isAuthenticated(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedin);
        }, 800);
      }
    );
    return promise;
  }
}

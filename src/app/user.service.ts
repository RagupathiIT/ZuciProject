import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private isAuthenticated: boolean = false;

  login(email:string,password:string) {
    if(email==='Admin' && password==='Admin'){
   console.log('login successs');
   
    this.isAuthenticated = true;
    }
    else{
      this.isAuthenticated=false;
    }
  }

  logout() {
    // Simulate a logout
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
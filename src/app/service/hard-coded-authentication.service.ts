import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === "Ravi" && password === "dummy") {
      sessionStorage.setItem("authenticatedUser",username);
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user==null);
  }
  logOut(){
    sessionStorage.removeItem("authenticatedUser");
  }
}

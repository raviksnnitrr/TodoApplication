import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  executeJWTAuthenticationService(username, password) {
   // let basicAuthHeaderString = 'Bearer ' + window.btoa(username + ':' + password);
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.post<any>(`http://localhost:8080/authenticate`,{username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean service");
  }
  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basic-auth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean service");
  }
  getAuthenticatedUser() {
    return sessionStorage.getItem("authenticatedUser");
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem("token");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user == null);
  }
  logOut() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("token");
  }
}
export class AuthenticationBean {
  constructor(private message: String) { }
}

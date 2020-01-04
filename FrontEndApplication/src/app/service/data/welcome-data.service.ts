import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
} 

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorld-bean")
    //console.log("Execute Hello World Bean service");
  }
  executeHelloWorldBeanServiceWithPathVariable(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorld-bean/path-variable/${name}`);
    //console.log("Execute Hello World Bean service");
  }
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'ravi';
  //   let password = 'password';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}

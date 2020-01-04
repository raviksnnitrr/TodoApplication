import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String = "Ravi";
  password: String;
  errorMessage = "Invalid Credentials";
  invalidUser: boolean = false;

  constructor(private router: Router, private hardCodedAuthenticationService: HardCodedAuthenticationService, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }
  onLogin() {
    //if(this.username === "Ravi" && this.password === "dummy"){
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidUser = false;
    }
    else {
      this.invalidUser = true;
    }
    // console.log("login clicked");
  }

  onBasicAuthLogin() {
  this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(
    data =>{
      console.log(data);
      this.router.navigate(['welcome', this.username]);
      this.invalidUser = false;
    },
    error => {
      console.log(error);
      this.invalidUser = true;
    }
  )
  }

  onJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      data =>{
        console.log(data);
        this.router.navigate(['welcome', this.username]);
        this.invalidUser = false;
      },
      error => {
        console.log(error);
        this.invalidUser = true;
      }
    )
    }
}

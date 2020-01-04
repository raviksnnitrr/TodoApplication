import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authetication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    if(basicAuthHeaderString && username){
    req = req.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString
      }
    })
  }
    return next.handle(req);
    }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = 'lightacademy';
    let password = 'dummy'
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password)

  req = req.clone({
    setHeaders : {
      Authorization : basicAuthenticationString
    }
  })

  return next.handle(req);


  }




}

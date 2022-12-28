import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN ='token'
export const AUTHENTICATED_USER = 'authenticatedUser'


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  //hardcoded auth
  // authenticate(username: string, password: string) {
  //   // console.log("before"+ this.isUserLoggedIn());
  //   if (username === 'lightacademy' && password === 'dummy') {
  //     sessionStorage.setItem('authenticatedUser', username);
  //     // console.log("after"+ this.isUserLoggedIn());

  //     return true;
  //   }
  //   return false;
  // }


  execudeAuthenticationService(username: string, password: string) {
    //handling auth
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString
      })

    //this execute when someone subscribe it
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      )


  }

  //utility methods


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
   return this.getAuthenticatedUser() ? sessionStorage.getItem(TOKEN) : null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.getItem(TOKEN)
  }

}


export class AuthenticationBean {
  constructor(public message: string) { }
}
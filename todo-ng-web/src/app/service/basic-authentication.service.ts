import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  //authanticating logs
  authenticate(username: string, password: string) {
    // console.log("before"+ this.isUserLoggedIn());
    if (username === 'lightacademy' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log("after"+ this.isUserLoggedIn());

      return true;
    }
    return false;
  }


  execudeAuthenticationService(username: string, password: string) {
   
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

     let headers = new HttpHeaders(
      { Authorization: basicAuthHeaderString 
      })

//this execute when someone subscribe it
    return this.http
    .get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers})
    .pipe(
        map(
          data=>{
            sessionStorage.setItem('authenticatedUser', username);
            return data;
          }
        )
      )
    
        
  }

  /* Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/lightacademy'
    from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
    header is present on the requested resource.
  
    This is error that after adding basic authentication you cant get the data, so you need to solve security issue first
   */
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'lightacademy';
  //   let password = 'dummy'
  //   let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthenticationString;
  // }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null)
  }

  logout(){

    sessionStorage.removeItem('authenticatedUser')
  }

}


export class AuthenticationBean{
  constructor(public message: string){}
}
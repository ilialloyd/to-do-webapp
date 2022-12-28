import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



export class HelloWorldBean {
  constructor(public message: String) {

  }
}


@Injectable({
  providedIn: 'root'
})
//get get data from backend
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  //connecting backend REST
  execudeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  execudeHelloWorldBeanServiceWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders(
      { Authorization: basicAuthHeaderString 
      })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      {headers});
  }

  /* Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/lightacademy'
    from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
    header is present on the requested resource.
  
    This is error that after adding basic authentication you cant get the data, so you need to solve security issue first
   */
  createBasicAuthenticationHttpHeader() {
    let username = 'lightacademy';
    let password = 'dummy'
    let basicAuthenticationString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthenticationString;
  }

}




// http://localhost:8080/hello-world/path-variable/ilham
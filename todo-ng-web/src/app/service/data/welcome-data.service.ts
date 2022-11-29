import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export class HelloWorldBean{
  constructor(public message: String){

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

  execudeHelloWorldBeanServiceWithPathVariable(name:string) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)

  }


}



// http://localhost:8080/hello-world/path-variable/ilham
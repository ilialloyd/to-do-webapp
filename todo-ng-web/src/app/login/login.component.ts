import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'lightacademy'
  password = ''
  // writing invalid login function
  errorMessage = 'invalid credentials';

  invalidLogin = false;

  // Router
  // Angular.giveMeRouter


  // Dependency Injection
  constructor(private router: Router,
    public hardcodedAuthenticationService :HardcodedAuthenticationService,
    public basicAuthenticationService :BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  

  handleLogin() {
    // console.log(this.username);
    // if (this.username === 'lightacademy' && this.password === 'dummy') {
      // redirenct to the Elcome Page
      if(this.hardcodedAuthenticationService.authenticate
                                       (this.username,this.password)){
                                        //passing username as a parameter
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;

    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
  
      this.basicAuthenticationService.execudeAuthenticationService(this.username,this.password)
      .subscribe({
        next: (data)=>{
         console.log(data)
         this.router.navigate(['welcome', this.username])
         this.invalidLogin = false;
         },
         error:(error)=>{
           console.log(`${error} occured`)
           this.invalidLogin = true;
         }
       
       });
  }

}


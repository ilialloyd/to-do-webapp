import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public hardcodedAuthenticationService :HardcodedAuthenticationService) { }

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

}

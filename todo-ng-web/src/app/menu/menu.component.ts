import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Returns true if the request was successful.
  // isUserLoggedIn : boolean = false;

  constructor(public hardcodedAuthenticationService:
     HardcodedAuthenticationService) { }

  ngOnInit(): void {
  //  this.isUserLoggedIn= this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}

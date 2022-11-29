import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message';
  welcomeMessageFromService: string = '';
  name = '';
  errorMessageFromService: string = '';


  //Injecting dependency  - Activated Route - username
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  ngOnInit(): void {
    console.log(this.message);
    // to use name in html file
    this.name = this.route.snapshot.params['name'];
  }


  //subscribe is a observable element and helps to subscribe the backend canals that gets the information
  // https://stackoverflow.com/questions/44921788/what-is-subscribe-in-angular
  //subscribe will syncronize with backend and it will only get the result.but we need to say that do to somehing
  //with that data/ by itself it will do nothing with that
  //if you get successfull with subscribe and got te data get the response and call the method

  getWelcomeMessage() {
    // console.log(this.service.execudeHelloWorldBeanService());

    this.service.execudeHelloWorldBeanService().subscribe({

      //we just get response and we send it to the method as response
      next: (response) => this.handleSuccessfulResponse(response),

      error: (error) => this.handleErrorResponse(error)
    });
    //console.log("last line of getWelcomeMessage");
  }



  getWelcomeMessageWithParameter() {
    // console.log(this.service.execudeHelloWorldBeanService());

    this.service.execudeHelloWorldBeanServiceWithPathVariable(this.name).subscribe({

      //we just get response and we send it to the method as response
      next: (response) => this.handleSuccessfulResponse(response),

      error: (error) => this.handleErrorResponse(error)
    });
    //console.log("last line of getWelcomeMessage");
  }


  handleErrorResponse(error: any): void {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);

    this.errorMessageFromService = error.error.message;
  }


  // we execute response here
  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message;

    // console.log(response);
    // console.log(response.message);
  }
}



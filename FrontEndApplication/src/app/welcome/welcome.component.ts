import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name: String;
  welcomeMessageFromService: String;
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomemessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomemessageWithPathVariable() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    //console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}

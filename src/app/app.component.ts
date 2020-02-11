import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';
  name = "Debbie"

  userName ="";

  calculate(){
    console.log("Input val:", this.userName);
  }
  clear(){
    this.userName = "";
  }

  test(){
    console.log("User clicked teh button");

    this.name = 'This is really cool !! ';
  }

}


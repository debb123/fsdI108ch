import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userName = "";
  password = "";
  
  registeredUsers = [];
  loginError = false;
  loginSucceed = false;

  constructor(private data : DataService) {
    this.registeredUsers = data.getUsers();
   }

  ngOnInit() {
  }
  validatelogin(){
    //travel the array
    // compare user and password with each ele in the array
    // if find a match , login correct
    for(var i = 0; i < this .registeredUsers.length; i++){
      var user = this .registeredUsers[i];
      if(user.userName == this.userName && user.password == this.password){
        console.log("Credentials are correct,you are logged in !!");
        this.loginSucceed = true;
        return true;
      }
    }

    console.log("Error, bad credentials!!");
    this.loginError = true;
  }




}

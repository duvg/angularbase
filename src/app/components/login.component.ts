import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import servics
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login-component',
  templateUrl : '../views/login.html',
  providers: [UserService]  //provider user.service
})

export class LoginComponent implements OnInit {
  public title: string;
  public user;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Identificate';
    this.user = {
      "email":"",
      "password":"",
      "getHash":true
    };
  }

  ngOnInit() {
    console.log('login component');
  }

  onSubmit ()
  {
    console.log(this.user);
    this._userService.signup(this.user).subscribe(
      //succes
      response=>{
        if(response.code === '200')
        {
          this.identity = response.data;
          //encode to json object and save in localstorage
          localStorage.setItem('identity', JSON.stringify(this.identity));
          console.log(localStorage.getItem('identity'));

          //get token
          this.user.getHash = false;
          this._userService.signup(this.user).subscribe(
            //succes
            response=>{
              this.token = response;
              
              if(response.code === '200')
              {
                this.token = response.data;
                //encode to json object and save in localstorage
                localStorage.setItem('token', JSON.stringify(this.token));
                console.log(localStorage.getItem('token'));
              }
              else
              {
                console.log("Error en el servidor:");
              }
            }, //error
            error => {
              console.log(<any>error);
            } 
            
          );
        }
        else
        {
          this.identity = response;
          console.log(response.data);
        }
      }, //error
      error => {
        console.log(<any>error);
      } 
      
    );
  }

  

}

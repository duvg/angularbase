import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl : '../views/login.html'
})

export class RegisterComponent implements OnInit {
  public title: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = 'Register Component';
  }

  ngOnInit() {
    console.log('register component');
  }

}
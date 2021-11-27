import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor() {}

  user = {
    name: 'Junior Carrillo',
    img: 'https://avatars.githubusercontent.com/u/78501030?s=40&v=4',
  };

  ngOnInit(): void {}
}

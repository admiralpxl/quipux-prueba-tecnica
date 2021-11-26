import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuOn: boolean = false;
  constructor() {}

  showMenu() {
    if (this.menuOn) {
      this.menuOn = false;
    } else {
      this.menuOn = true;
    }
    console.log(this.menuOn);
  }

  ngOnInit(): void {}
}

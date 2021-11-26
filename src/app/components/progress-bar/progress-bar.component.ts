import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  initNumber = 1;
  countNumber: number = 1;
  lastNumber: number = 4;
  btnDisabledNext: boolean = false;
  btnDisabledPrevius: boolean = true;

  constructor() {}

  next() {
    if (this.countNumber === this.lastNumber - 1) {
      this.btnDisabledNext = true;
    }

    this.btnDisabledPrevius = false;
    this.countNumber += 1;
    console.log('next');
  }

  previus() {
    if (this.countNumber === this.initNumber + 1) {
      this.btnDisabledPrevius = true;
    }
    this.btnDisabledNext = false;
    this.countNumber -= 1;
    console.log('previus');
  }

  ngOnInit(): void {}
}

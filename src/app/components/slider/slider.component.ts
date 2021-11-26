import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  initCount = 0;
  counter: number = 0;

  btnDisabledNext: boolean = false;
  btnDisabledPrevius: boolean = true;
  imagenes = [
    {
      id: 0,
      url: 'https://i.imgur.com/4NRzSgy.png',
    },
    {
      id: 1,
      url: 'https://i.imgur.com/MHtsmWx.jpeg',
    },
    {
      id: 2,
      url: 'https://i.imgur.com/alUFvkP.jpeg',
    },
    { id: 3, url: 'https://i.imgur.com/KfayrOn.jpeg' },
  ];
  ngOnInit(): void {}
  next() {
    let imagenesSize =
      this.imagenes.length === 4
        ? this.imagenes.length - 1
        : this.imagenes.length;

    if (this.counter === imagenesSize - 1) {
      this.btnDisabledNext = true;
    }
    this.btnDisabledPrevius = false;
    this.counter += 1;
    console.log('next');
    console.log(this.counter);
    console.log(this.imagenes.length);
    console.log(this.initCount);
  }

  previus() {
    if (this.counter === this.initCount + 1) {
      this.btnDisabledPrevius = true;
    }
    this.btnDisabledNext = false;
    this.counter -= 1;
    console.log('previus');
    console.log(this.counter);
    console.log(this.initCount);
  }
}

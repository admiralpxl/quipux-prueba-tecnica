import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
})
export class InputSearchComponent implements OnInit {
  searchOptions = [
    'Todos los servicios',
    'Marketing',
    'Diseño',
    'Ingles',
    'Audiovisual',
  ];

  constructor() {}

  ngOnInit(): void {}
}

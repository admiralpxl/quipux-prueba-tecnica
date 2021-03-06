import { Component, OnInit } from '@angular/core';

import { Article } from '../../article.model';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  constructor() {}

  articulos: Article[] = [
    {
      id: '1',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '2',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '3',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '4',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '5',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '6',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '7',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
    {
      id: '8',
      imagen: 'https://via.placeholder.com/100',
      titulo: 'Titulo del artículo',
      descripcion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem modi est accusamus ratione eos eligendi?',
    },
  ];

  ngOnInit(): void {}
}

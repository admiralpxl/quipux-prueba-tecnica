import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-info-card',
  templateUrl: './mini-info-card.component.html',
  styleUrls: ['./mini-info-card.component.css'],
})
export class MiniInfoCardComponent implements OnInit {
  constructor() {}
  content = [
    {
      titulo: 'Certificado',
      descripcion: 'Conoce los beneficios que tenemos para ti al registrarte',
      accion: '+ beneficios',
    },
    {
      titulo: 'Crear cuenta',
      descripcion: 'Conoce los beneficios que tenemos para ti al registrarte',
      accion: 'ver todo',
    },
    {
      titulo: 'Top trámites',
      descripcion: 'Conoce los trámites más solicitados',
      accion: 'ver todo',
    },
  ];

  ngOnInit(): void {}
}

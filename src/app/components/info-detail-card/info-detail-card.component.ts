import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-detail-card',
  templateUrl: './info-detail-card.component.html',
  styleUrls: ['./info-detail-card.component.css'],
})
export class InfoDetailCardComponent implements OnInit {
  constructor() {}

  userInfo = {
    direccion: 'Carrera 52 # 91-66 Medellín Colombia',
    correo: 'usuarioapellido@hotmail.com',
    web: 'www.usuarioapellido.com',
    redSocial: 'www.instagram.com/usuarioapellido',
    adres: 'Carrera 52 # 91-66 Envigado Colombia',
    tlfFijo: '+57 (4) 313-70-00',
    tlfMovil: '(312) 313-44-77',
  };

  ngOnInit(): void {}
}

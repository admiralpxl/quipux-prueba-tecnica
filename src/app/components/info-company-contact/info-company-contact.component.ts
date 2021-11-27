import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-company-contact',
  templateUrl: './info-company-contact.component.html',
  styleUrls: ['./info-company-contact.component.css'],
})
export class InfoCompanyContactComponent implements OnInit {
  constructor() {}

  companyInfoContact = {
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

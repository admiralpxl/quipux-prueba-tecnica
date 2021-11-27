import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-company',
  templateUrl: './info-company.component.html',
  styleUrls: ['./info-company.component.css'],
})
export class InfoCompanyComponent implements OnInit {
  constructor() {}

  companyInfo = {
    nombre: 'Quipux S.A.S',
    fecha: '1995/05/06',
    direccion:
      'Carrera 43A No. 3 Sur-130 Ed. Milla de Oro Distrito de negocios Torre 1 Piso 12 Medellín - Colombia',
    tlfFijo: '+57 (4) 313-70-00',
    fax: '+57 (4) 313-44-77',
    web: 'www.quipux.com/site',
  };

  ngOnInit(): void {}
}

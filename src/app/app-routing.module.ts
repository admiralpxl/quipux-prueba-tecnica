import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'empresas',
    component: EmpresasComponent,
  },
  {
    path: 'articulos',
    component: ArticulosComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressCardInfoComponent } from './components/progress-card-info/progress-card-info.component';
import { MiniInfoCardComponent } from './components/mini-info-card/mini-info-card.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { HomeCardComponent } from './components/home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmpresasComponent,
    ArticulosComponent,
    FooterComponent,
    ProgressBarComponent,
    ProgressCardInfoComponent,
    MiniInfoCardComponent,
    InputSearchComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

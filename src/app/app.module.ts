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
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardArticleComponent } from './components/card-article/card-article.component';
import { InfoDetailCardComponent } from './components/info-detail-card/info-detail-card.component';
import { InfoCompanyComponent } from './components/info-company/info-company.component';
import { InfoCompanyContactComponent } from './components/info-company-contact/info-company-contact.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

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
    HomeCardComponent,
    SlideMenuComponent,
    SliderComponent,
    CardArticleComponent,
    InfoDetailCardComponent,
    InfoCompanyComponent,
    InfoCompanyContactComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

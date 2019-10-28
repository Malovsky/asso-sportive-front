import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil/accueil.component';
import { NavbarreComponent } from './components/navbarre/navbarre.component';
import { SportifsListComponent } from './components/sportifs-list/sportifs-list.component';
import { GymnasesComponent } from './components/gymnases/gymnases.component';
import { SportifsComponent } from './components/sportifs/sportifs.component';
import { ViewSeancesComponent } from './components/view-seances/view-seances.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarreComponent,
    SportifsListComponent,
    GymnasesComponent,
    SportifsComponent,
    ViewSeancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil/accueil.component';
import { NavbarreComponent } from './components/navbarre/navbarre.component';
import { SportifsListComponent } from './components/sportifs-list/sportifs-list.component';
import { GymnasesComponent } from './components/gymnases/gymnases.component';
import { SportifsComponent } from './components/sportifs/sportifs.component';
import { ViewSeancesComponent } from './components/view-seances/view-seances.component';
import { SearchGymnaseComponent } from './components/search-gymnase/search-gymnase.component';
import { SearchSportifComponent } from './components/search-sportif/search-sportif.component';
import { SearchSeanceComponent } from './components/search-seance/search-seance.component';
import { AllSeancesComponent } from './components/all-surfaces/all-seances.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarreComponent,
    SportifsListComponent,
    GymnasesComponent,
    SportifsComponent,
    ViewSeancesComponent,
    SearchGymnaseComponent,
    SearchSportifComponent,
    SearchSeanceComponent,
    AllSeancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

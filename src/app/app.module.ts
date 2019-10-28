import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil/accueil.component';
import { NavbarreComponent } from './components/navbarre/navbarre.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

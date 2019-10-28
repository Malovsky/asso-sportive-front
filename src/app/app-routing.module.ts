import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { SportifsListComponent } from './components/sportifs-list/sportifs-list.component';
import { GymnasesComponent } from './components/gymnases/gymnases.component';
import { ViewSeancesComponent } from './components/view-seances/view-seances.component';
import { AccueilComponent } from './components/accueil/accueil/accueil.component';

const routes: Routes = [
  {
    path: 'sportifs',
    component: SportifsListComponent
  },
  {
    path: 'gymnases',
    component: GymnasesComponent
  },
  {
    path: 'seancesForGymnase/:id',
    component: ViewSeancesComponent
  },
  {
    path: '',
    component: AccueilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

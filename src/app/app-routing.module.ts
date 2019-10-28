import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { SportifsListComponent } from './components/sportifs-list/sportifs-list.component';
import { GymnasesComponent } from './components/gymnases/gymnases.component';
import { ViewSeancesComponent } from './components/view-seances/view-seances.component';
import { AccueilComponent } from './components/accueil/accueil/accueil.component';
import { SearchGymnaseComponent } from './components/search-gymnase/search-gymnase.component';
import { SearchSportifComponent } from './components/search-sportif/search-sportif.component';
import { SearchSeanceComponent } from './components/search-seance/search-seance.component';
import { AllSeancesComponent } from './components/all-surfaces/all-seances.component';

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
  },
  {
    path: 'gymnaseSearch',
    component: SearchGymnaseComponent
  },
  {
    path: 'sportifSearch',
    component: SearchSportifComponent
  },
  {
    path: 'seanceSearch',
    component: SearchSeanceComponent
  },
  {
    path: 'allSurfaces',
    component: AllSeancesComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

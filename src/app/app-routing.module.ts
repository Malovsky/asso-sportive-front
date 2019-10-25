import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import { SportifsListComponent } from './components/sportifs-list/sportifs-list.component';

const routes: Routes = [
  {
    path: '',
    component: SportifsListComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

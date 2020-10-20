import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrphanagesMapComponent } from './pages/orphanages-map/orphanages-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 'HomePage',
      title: 'Happy | Home'
    }
  },
  {
    path: 'orphanages',
    component: OrphanagesMapComponent,
    data: {
      animation: 'OrphanagesPage',
      title: 'Happy | OrphanagesMap'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

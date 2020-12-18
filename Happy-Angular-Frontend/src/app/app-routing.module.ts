import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OrphanagesMapComponent } from './pages/orphanages-map/orphanages-map.component';
import { CreateOrphanageComponent } from './pages/create-orphanage/create-orphanage.component';
import { OrphanageComponent } from './pages/orphanage/orphanage.component';

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
            title: 'Happy | Mapa de Orfanatos'
        }
    },
    {
        path: 'orphanages/create',
        component: CreateOrphanageComponent,
        data: {
            animation: 'CreateOrphanagePage',
            title: 'Happy | Registrar Orfanato'
        }
    },
    {
        path: 'orphanage/:id',
        component: OrphanageComponent,
        data: {
            animation: 'OrphanagePage',
            title: 'Happy | Orfanato'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            preloadingStrategy: PreloadAllModules,
            relativeLinkResolution: 'legacy'
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }

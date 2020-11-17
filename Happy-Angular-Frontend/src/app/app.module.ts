import { NgModule } from '@angular/core';
import {
    Title,
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material */
import { MatIconModule } from '@angular/material/icon';

/** Leaflet */
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

/** Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OrphanagesMapComponent } from './pages/orphanages-map/orphanages-map.component';
import { CreateOrphanageComponent } from './pages/create-orphanage/create-orphanage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OrphanageComponent } from './pages/orphanage/orphanage.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OrphanagesMapComponent,
        CreateOrphanageComponent,
        SidebarComponent,
        OrphanageComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        MatIconModule,
        LeafletModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

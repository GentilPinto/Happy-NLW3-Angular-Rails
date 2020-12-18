import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    Title,
    BrowserModule
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

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
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

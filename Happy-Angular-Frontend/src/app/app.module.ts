import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material */
import { MatIconModule } from '@angular/material/icon';

/** Leaflet */
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

/** Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OrphanagesMapComponent } from './pages/orphanages-map/orphanages-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrphanagesMapComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    LeafletModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

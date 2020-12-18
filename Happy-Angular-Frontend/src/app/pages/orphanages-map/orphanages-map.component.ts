import {
    OnInit,
    Component,
    OnDestroy,
} from '@angular/core';

import { Subject } from 'rxjs';
import * as Leaflet from 'leaflet';
import { takeUntil } from 'rxjs/operators';
import { MarkerIcon } from '../../shared/marker-icon';
import { Orphanage } from '../../interfaces/orphanage.interface';
import { INIT_COORDS } from '../../shared/initial-coordinates';
import { OprhanageService } from '../../services/oprhanage.service';


@Component({
    selector: 'app-orphanages-map',
    templateUrl: './orphanages-map.component.html',
    styleUrls: ['./orphanages-map.component.scss']
})
export class OrphanagesMapComponent implements OnInit, OnDestroy {

    private _map = null;
    private _orphanages: Orphanage[] = [];
    private _destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private _orphanageService: OprhanageService
    ) { }

    ngOnInit(): void {
        this._orphanageService.getAllOrphanages()
            .pipe(takeUntil(this._destroy$))
            .subscribe((orphanage: Orphanage[]) => {
                this._orphanages = orphanage;
                this.initMap();
                this.initMarkers();
            });
    }

    ngOnDestroy(): void {
        this._destroy$.next(true);
        this._destroy$.unsubscribe();
    }

    private initMap(): void {
        this._map = Leaflet.map('map', {
            center: [INIT_COORDS.latitude, INIT_COORDS.longitude],
            zoom: 11,
        });

        const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: ''
        });

        tiles.addTo(this._map);
    }

    private initMarkers(): void {
        this._orphanages.map((orphanage: Orphanage) => {
            const popup = Leaflet.popup({
                closeButton: false,
                maxWidth: 240,
                minWidth: 240,
                className: 'popup-map'
            }).setContent(
                `
                    ${orphanage.name} <a _ngcontent-kjk-c1="" routerlink="/orphanage/${orphanage.id}" ng-reflect-router-link="/orphanage/${orphanage.id}" href="/orphanage/${orphanage.id}">
                        <mat-icon style="size: 20px; color: #FFF">
                            arrow_forward
                        </mat-icon>
                    </a>
                `
            );

            Leaflet.marker([orphanage.latitude, orphanage.longitude], MarkerIcon)
                .addTo(this._map)
                .bindPopup(popup);
        });
    }
}

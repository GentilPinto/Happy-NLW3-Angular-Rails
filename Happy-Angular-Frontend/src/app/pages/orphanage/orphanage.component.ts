import {
    OnInit,
    OnDestroy,
    Component
} from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon
} from 'leaflet';
import * as Leaflet from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { Orphanage } from '../../interfaces/orphanage.interface';

@Component({
    selector: 'app-orphanage',
    templateUrl: './orphanage.component.html',
    styleUrls: ['./orphanage.component.scss']
})
export class OrphanageComponent implements OnInit, OnDestroy {

    private _map: Leaflet.Map;

    private _options: any;

    private _markerIcon = {
        icon: Leaflet.icon({
            iconUrl: 'assets/images/map-marker.svg',
            iconSize: [58, 68],
            iconAnchor: [29, 68],
            popupAnchor: [0, -60]
        })
    };

    private _orphanage: Orphanage;
    private _activeImageIndex = 0;

    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            const id: number = +params.id;
            const orphanagesFromLocalstorage = JSON.parse(localStorage.getItem('happy-orphanages'));
            const orphanage = orphanagesFromLocalstorage[id - 1];
            this._orphanage = orphanage;
        });

        this._options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '' })
            ],
            zoom: 16,
            center: latLng(this._orphanage.latitude, this._orphanage.longitude),
            position: [this._orphanage.latitude, this._orphanage.longitude],
            dragging: false,
            touchZoom: false,
            zoomControl: false,
            scrollWhellZoom: false,
            doubleClickZoom: false,
            interactive: false,
            style: { width: '100%', height: '280px' },
        };
    }

    ngOnDestroy(): void {
    }

    public get options(): any {
        return this._options;
    }

    public initMarkers(): void {
        Leaflet.marker([this._orphanage.latitude, this._orphanage.longitude], this._markerIcon)
            .addTo(this._map);
    }

    public onMapReady(map: Leaflet.Map): void {
        this._map = map;
        this.initMarkers();
    }

    public get orphanage(): Orphanage {
        return this._orphanage;
    }

    public get orphanageImages(): Array<any> {
        return this._orphanage.images;
    }

    public get activeImageIndex(): number {
        return this._activeImageIndex;
    }

    public set activeImageIndex(value: number) {
        this._activeImageIndex = value;
    }

    public currentImage(index: number, orphanageImages: any): any {
        return orphanageImages.id;
    }
}

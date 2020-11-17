import { Component, OnInit } from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon,
    popup as LeafletPopup
} from 'leaflet';
import * as Leaflet from 'leaflet';
import { Orphanage } from '../../interfaces/orphanage.interface';

@Component({
    selector: 'app-orphanages-map',
    templateUrl: './orphanages-map.component.html',
    styleUrls: ['./orphanages-map.component.scss']
})
export class OrphanagesMapComponent implements OnInit {

    private _orphanages: Array<Orphanage> = [
        {
            id: 1,
            name: 'Lar Kuzola',
            latitude: -8.9179403,
            longitude: 13.200951799999999,
            about: 'Orphanato Lar Kuzola',
            instructions: 'Venha nos visitar!',
            opening_hours: '18h as 20h',
            open_on_weekends: true,
            images: [
                {
                    id: 1,
                    url: 'assets/images/landing.svg'
                },
                {
                    id: 2,
                    url: 'assets/images/map-marker.svg'
                },
            ]
        },
        {
            id: 2,
            name: 'Lar Kuzola2',
            latitude: -8.916929,
            longitude: 13.200882,
            about: 'Orphanato Lar Kuzola 2',
            instructions: 'Venha nos visitar!',
            opening_hours: '7h as 23h',
            open_on_weekends: false,
            images: [
                {
                    id: 1,
                    url: 'assets/images/map-marker.svg'
                },
                {
                    id: 2,
                    url: 'assets/images/landing.svg'
                },
            ]
        }
    ];

    private _homeCoords = {
        latitude: -8.9179403,
        longitude: 13.200951799999999
    };

    private _map: Leaflet.Map;

    private _options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
        ],
        zoom: 15,
        center: latLng(this._homeCoords.latitude, this._homeCoords.longitude)
    };

    private _markerIcon = {
        icon: Leaflet.icon({
            iconUrl: 'assets/images/map-marker.svg',
            iconSize: [58, 68],
            iconAnchor: [29, 68],
            popupAnchor: [0, -60]
        })
    };

    constructor() { }

    ngOnInit(): void {
        localStorage.setItem('happy-orphanages', JSON.stringify(this._orphanages));
    }

    public get options(): any {
        return this._options;
    }

    public initMarkers(): void {
        this._orphanages.map(orphanage => {
            console.log(orphanage);
            const popup = LeafletPopup({
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
            Leaflet.marker([orphanage.latitude, orphanage.longitude], this._markerIcon)
                .addTo(this._map)
                .bindPopup(popup);
        });
    }

    public onMapReady(map: Leaflet.Map): void {
        this._map = map;
        this.initMarkers();
    }

    //     public async onMapReady(map: Leaflet.Map): Promise < void> {
    //     await this.getMyCurrentPosition().then((result) => {
    //         this._myCurrentPosition.latitude = result.coords.latitude;
    //         this._myCurrentPosition.longitude = result.coords.longitude;
    //     });
    //     this._map = map.panTo(
    //         new Leaflet.LatLng(
    //             this._myCurrentPosition.latitude,
    //             this._myCurrentPosition.longitude
    //         )
    //     );
    // }

    // public getMyCurrentPosition(): Promise < any > {
    //     return new Promise((resolve, reject) => {
    //         navigator.geolocation.getCurrentPosition(
    //             (result) => {
    //                 resolve(result);
    //             },
    //             (error) => {
    //                 console.log('Error: ', error);
    //                 reject(error);
    //             }
    //         );
    //     });
    // }
}

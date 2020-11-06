import { Component, OnInit } from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon,
    popup as LeafletPopup
} from 'leaflet';
import * as Leaflet from 'leaflet';
import { responsivePopup } from 'leaflet-responsive-popup';

@Component({
    selector: 'app-orphanages-map',
    templateUrl: './orphanages-map.component.html',
    styleUrls: ['./orphanages-map.component.scss']
})
export class OrphanagesMapComponent implements OnInit {

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

    ngOnInit(): void { }

    public get options(): any {
        return this._options;
    }

    public initMarkers(): void {
        const popup = LeafletPopup({
            closeButton: false,
            maxWidth: 240,
            minWidth: 240,
            className: 'popup-map'
        }).setContent(
            `
                Lar do Gentil <a _ngcontent-kjk-c1="" routerlink="/orphanage/1" ng-reflect-router-link="/orphanage/1" href="/orphanage/1">
                    <mat-icon style="size: 20px; color: #FFF">
                        arrow_forward
                    </mat-icon>
                </a>
            `
        );
        Leaflet.marker([this._homeCoords.latitude, this._homeCoords.longitude], this._markerIcon)
            .addTo(this._map)
            .bindPopup(popup);
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

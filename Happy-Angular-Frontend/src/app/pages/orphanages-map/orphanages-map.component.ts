import { Component, OnInit } from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon
} from 'leaflet';
import * as Leaflet from 'leaflet';

@Component({
    selector: 'app-orphanages-map',
    templateUrl: './orphanages-map.component.html',
    styleUrls: ['./orphanages-map.component.scss']
})
export class OrphanagesMapComponent implements OnInit {

    private _myCurrentPosition = {
        latitude: null,
        longitude: null
    };

    private _map: Leaflet.Map;

    private _options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
        ],
        zoom: 15,
        center: latLng(0, 0)
    };

    layer = marker([-8.9179403, 13.200951799999999], {
        icon: icon({
            iconSize: [58, 68],
            iconAnchor: [29, 68],
            iconUrl: 'assets/images/map-marker.svg'
        })
    });

    constructor() { }

    ngOnInit(): void { }

    public get options(): any {
        return this._options;
    }

    public async onMapReady(map: Leaflet.Map): Promise<void> {
        await this.getMyCurrentPosition().then((result) => {
            this._myCurrentPosition.latitude = result.coords.latitude;
            this._myCurrentPosition.longitude = result.coords.longitude;
        });
        this._map = map.panTo(
            new Leaflet.LatLng(
                this._myCurrentPosition.latitude,
                this._myCurrentPosition.longitude
            )
        );
    }

    public getMyCurrentPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    resolve(result);
                },
                (error) => {
                    console.log('Error: ', error);
                    reject(error);
                }
            );
        });
    }
}

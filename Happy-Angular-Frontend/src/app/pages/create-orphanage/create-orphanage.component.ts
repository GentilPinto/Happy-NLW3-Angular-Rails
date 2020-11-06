import { Component, OnInit } from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon
} from 'leaflet';
import * as Leaflet from 'leaflet';

@Component({
    selector: 'app-create-orphanage',
    templateUrl: './create-orphanage.component.html',
    styleUrls: ['./create-orphanage.component.scss']
})
export class CreateOrphanageComponent implements OnInit {
    private _map: Leaflet.Map;

    private _options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
        ],
        zoom: 15,
        center: latLng(-8.9179403, 13.200951799999999)
    };

    constructor() { }

    ngOnInit(): void { }

    public get options(): any {
        return this._options;
    }
}

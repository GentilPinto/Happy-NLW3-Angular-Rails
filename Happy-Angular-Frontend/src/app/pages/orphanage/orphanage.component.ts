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

@Component({
    selector: 'app-orphanage',
    templateUrl: './orphanage.component.html',
    styleUrls: ['./orphanage.component.scss']
})
export class OrphanageComponent implements OnInit, OnDestroy {

    private _map: Leaflet.Map;

    private _options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '' })
        ],
        zoom: 16,
        center: latLng(-8.9179403, 13.200951799999999),
        position: [-8.9179403, 13.200951799999999],
        dragging: false,
        touchZoom: false,
        zoomControl: false,
        scrollWhellZoom: false,
        doubleClickZoom: false,
        interactive: false,
        style: { width: '100%', height: '280px' },
    };

    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params.id;
            alert(this.id);
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    public get options(): any {
        return this._options;
    }

}

import {
    OnInit,
    ViewChild,
    Component,
    ElementRef,
    OnChanges
} from '@angular/core';
import {
    latLng,
    tileLayer,
    marker,
    icon,
    LeafletMouseEvent
} from 'leaflet';
import * as Leaflet from 'leaflet';
import {
    FormGroup,
    FormBuilder,
    FormControl
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-create-orphanage',
    templateUrl: './create-orphanage.component.html',
    styleUrls: ['./create-orphanage.component.scss']
})
export class CreateOrphanageComponent implements OnInit {

    public createOrphanageForm = new FormGroup({
        name: new FormControl('')
    });

    public previewImagesArray = [];
    private _map: Leaflet.Map;
    private _options: object;
    private _position = {
        latitude: 0,
        longitude: 0
    };

    private _markerIcon = {
        icon: Leaflet.icon({
            iconUrl: 'assets/images/map-marker.svg',
            iconSize: [58, 68],
            iconAnchor: [29, 68],
            popupAnchor: [0, -60]
        })
    };

    public markers = Leaflet.layerGroup();

    constructor(
        private _sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this._options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
            ],
            zoom: 15,
            center: latLng(-8.9179403, 13.200951799999999)
        };
    }

    public get position(): object {
        return this._position;
    }

    public onMapReady(map: Leaflet.Map): void {
        map.on('click', (e: LeafletMouseEvent) => {
            const { lat, lng } = e.latlng;

            this._position = {
                latitude: lat,
                longitude: lng
            };
            if (this._position.latitude !== 0) {
                this.removeMarkers();
                const m = Leaflet.marker(
                    [this._position.latitude, this._position.longitude],
                    this._markerIcon,
                );
                this.markers.addLayer(m);
                this._map.addLayer(this.markers);
            }
        });
        this._map = map;
    }

    public removeMarkers(): void {
        this.markers.clearLayers();
    }

    public get options(): any {
        return this._options;
    }

    // private set Images(images: Array<any>) {
    //     this.images.nativeElement = images;
    // }

    public set previewImages(previewImages: Array<any>) {
        this.previewImagesArray = previewImages;
    }

    public get previewImages(): Array<any> {
        return this.previewImagesArray;
    }

    public handleSelectImages(event: any): void {
        const files = (event.target as HTMLInputElement).files;
        const selectedImages = Array.from(files);
        selectedImages.map(image => {
            return this.previewImagesArray.push(this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(image)));
        });
    }

    public submit(form): void {
        console.log(form);
    }
}

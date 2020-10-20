import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-orphanages-map',
  templateUrl: './orphanages-map.component.html',
  styleUrls: ['./orphanages-map.component.scss']
})
export class OrphanagesMapComponent implements OnInit {

  private _options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(-8.9194496, 13.203013)
  };

  constructor() { }

  ngOnInit(): void {
  }

  public get options(): object {
    return this._options;
  }

}

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
    center: latLng(0, 0)
  };

  constructor() { }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      this._options.center = latLng(-8.9179403, 13.200951799999999);
    }
  }

  public setPosition(position): void {
    this._options.center = latLng(position.coords.latitude, position.coords.longitude);
  }

  public get options(): object {
    return this._options;
  }

}

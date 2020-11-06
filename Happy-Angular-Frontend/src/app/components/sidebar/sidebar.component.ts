import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    constructor(
        private _location: Location
    ) {
    }

    ngOnInit(): void {
    }

    public goBack(): void {
        this._location.back();
    }
}

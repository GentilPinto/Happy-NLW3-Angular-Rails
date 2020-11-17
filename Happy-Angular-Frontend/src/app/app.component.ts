import {
    OnInit,
    OnDestroy,
    Component
} from '@angular/core';
import {
    Router,
    RouterOutlet,
    NavigationEnd,
    ActivatedRoute
} from '@angular/router';
import {
    map,
    filter
} from 'rxjs/operators';
import { slideInAnimation } from './animation';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        slideInAnimation
    ]
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(
        private _router: Router,
        private _titleService: Title,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const appTitle = this._titleService.getTitle();
        this._router
            .events.pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    const childTitle = this._activatedRoute.firstChild.snapshot.data.title;
                    return childTitle ? childTitle : appTitle;
                })
            ).subscribe((title: string) => {
                this._titleService.setTitle(title);
            });
    }

    ngOnDestroy(): void {
        localStorage.removeItem('happy-orphanages');
    }

    public prepareRoute(outlet: RouterOutlet): void {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}

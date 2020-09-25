import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteService } from 'src/app/services/route.service';
import { RouteProgress } from 'src/app/routeProgress';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  routeProgress: RouteProgress;

  constructor(
    private runProviderService: RunProviderService,
    private routeService : RouteService
    ) {
   }

  ngOnInit() {
    this.routeService.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    this.routeService.routeProgressChange.subscribe(routeProgress => this.routeProgress = routeProgress);
  }

/*   getRouteProgress() {
    this.runProviderService.getRouteProgress().subscribe(progress => this.routeProgress = progress);
  } */

  abandonRoute() {
    this.routeService.clearRouteProgress();
  }
}

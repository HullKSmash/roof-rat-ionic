import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteProgress } from 'src/app/routeProgress';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  routeProgress: RouteProgress;

  constructor(private runProviderService: RunProviderService) {
   }

  ngOnInit() {
    this.runProviderService.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    this.runProviderService.routeProgressChange.subscribe(routeProgress => this.routeProgress = routeProgress);
  }

/*   getRouteProgress() {
    this.runProviderService.getRouteProgress().subscribe(progress => this.routeProgress = progress);
  } */

  abandonRoute() {
    this.runProviderService.clearRouteProgress();
  }
}

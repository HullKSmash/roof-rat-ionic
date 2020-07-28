import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteProgress } from 'src/app/routeProgress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  routeProgress: RouteProgress;

/*   distanceLogged: number;
  finished: Boolean;
  percentComplete: number;
  routeLength: number;
  routeName: string; */

  constructor(private runProviderService: RunProviderService) {}

  ngOnInit() {
    this.runProviderService.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    
    this.runProviderService.routeProgressChange.subscribe(routeProgress => {
      this.routeProgress = routeProgress;
    });
  }

/*   getRouteProgress() {
    //Get progress values to render on UI
    this.runProviderService.getRouteProgress()
    .subscribe(routeProgress => {
      this.routeProgress = routeProgress;
    })
  } */

  restartRoute() {
    this.runProviderService.clearRouteProgress();
  }

}

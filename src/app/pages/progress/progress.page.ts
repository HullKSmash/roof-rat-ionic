import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteProgress } from 'src/app/routeProgress';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  routeProgress: RouteProgress;

  constructor(
    private runProviderService: RunProviderService,
    private routeService: RouteService
    ) {}

  ngOnInit() {
    this.getRouteProgress();
    this.routeService.routeProgressChange.subscribe(routeProgress => {
      this.routeProgress = routeProgress;
    });
  }

  getRouteProgress() {
    //Get progress values to render on UI
    this.routeService.getRouteProgress()
    .subscribe(routeProgress => {
      this.routeProgress = routeProgress;
    })
  }

/*   restartRoute() {
    this.runProviderService.clearRouteProgress();
  } */

}

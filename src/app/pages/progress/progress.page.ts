import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { Landmark } from 'src/app/landmark';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {


  distanceLogged: number;
  finished: Boolean;
  percentComplete: number;
  routeLength: number;
  routeName: string;

  constructor(private runProviderService: RunProviderService) {
//    this.runProviderService.routeProgressChange.subscribe({
//      next: (data) => console.log('Progress page receives from service: ' + data.distanceLogged)
//    })
  }


  ngOnInit() {
    //get route progress on init
    //if done, conditional in HTML to show "finished" experience
    //if not done, show "in progress" UI - also a conditional in HTML
    this.runProviderService.routeProgressChange.subscribe(routeProgress => {
      this.distanceLogged = routeProgress.distanceLogged;
      this.finished = routeProgress.finished;
      this.percentComplete = routeProgress.percentComplete;
      this.routeLength = routeProgress.routeLength;
    });
    this.getRouteProgress();
  }

  getRouteProgress() {
    //Get progress values to render on UI
    console.log("Getting route progress");
    this.runProviderService.getRouteProgress()
    .subscribe(routeProgress => {
      this.distanceLogged = routeProgress.distanceLogged;
      this.finished = routeProgress.finished;
      this.percentComplete = routeProgress.percentComplete;
      this.routeLength = routeProgress.routeLength;
      this.routeName = routeProgress.routeName;
    })
  }

  //Need to get route name - look it up from routes based on ID from progress

  restartRoute() {
    this.runProviderService.clearRouteProgress();
  }

}

import { Injectable } from '@angular/core';
import { RouteProgress } from '../routeProgress';
import { Subject, Observable, of } from 'rxjs';
import { Run } from 'src/app/run';
import * as routesData  from 'src/app/model/data/routesData.json';
import { RunProviderService } from 'src/app/model/run-provider.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  runProviderService: any;

  id: number;
  name: string;
  length: number;
  image: string;
  description: string;

  availableRoutes: Array<RouteService>;

  routeProgress: RouteProgress;
  routeProgressChange: Subject<RouteProgress> = new Subject<RouteProgress>();

  runHistory: Array<Run>;

  constructor() {
    this.id;
    this.name;
    this.length;
    this.image;
    this.description;

    this.routeProgressChange.subscribe((routeProgress => {
      this.routeProgress = routeProgress;
    }));

  }

  setRunProviderService(runProviderService) {
    this.runProviderService = runProviderService;
    console.log('Set run provider service');
    console.log(this.runProviderService.typeof);
  }

  getAvailableRoutes(): Observable<Array<RouteService>> {
    this.availableRoutes = [];
    (routesData as any).default.forEach(route => this.availableRoutes.push(route));
//    console.log(this.availableRoutes);
    return of(this.availableRoutes);
  }

  start(userId: number) {
    console.log("Setting route progress obj");
    this.routeProgress = {
      userId: userId,
      routeId: this.id,
      routeName: this.name,
      finished: false,
      distanceLogged: 0,
      routeLength: this.length,
      percentComplete: 0
    };

    this.runHistory = [];

    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    this.routeProgressChange.next(this.routeProgress);
    localStorage.setItem("roofrat_runHistory", JSON.stringify(this.runHistory));
  }

  finish() {
    this.routeProgress.finished = true;
    this.routeProgress.percentComplete = 100;
    this.routeProgressChange.next(this.routeProgress);
    return this.routeProgress;
  }

  updateProgress(distance): Observable<RouteProgress> {
    this.routeProgress.distanceLogged = distance;
    if (this.routeProgress.distanceLogged >= this.routeProgress.routeLength) {
      this.finish();
    } else {
      this.routeProgress.percentComplete = this.calculatePercentComplete(distance);
      this.routeProgressChange.next(this.routeProgress);
    }
    return of(this.routeProgress);
  }

  calculatePercentComplete(distance) {
    let percentComplete = Math.round((distance/this.routeProgress.routeLength)*100);
    return percentComplete;
  }

  getRouteProgress(): Observable<RouteProgress> {
    if (!this.routeProgress) {
      if (localStorage.getItem("roofrat_routeProgress")) {
        this.routeProgress = JSON.parse(localStorage.getItem("roofrat_routeProgress"));
        this.routeProgressChange.next(this.routeProgress);
        return of(this.routeProgress);
      } else {
        return of(null);
      }
    } else {
      return of(this.routeProgress);
    }
  }

  clearRouteProgress() {
    localStorage.removeItem("roofrat_routeProgress");
//    this.runHistory = this.runProviderService.clearRouteProgress();
//    this.runHistoryChange.next(this.runHistory);
    this.routeProgress = null;
    this.routeProgressChange.next(this.routeProgress);
    this.runProviderService.clearRouteProgress();
//    this.getRouteProgress;
    return this.routeProgress;
  }

  //When a run is added, it needs to be updated here

}

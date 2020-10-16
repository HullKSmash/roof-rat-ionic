import { Injectable } from '@angular/core';
import { RouteProgress } from '../routeProgress';
import { Subject, Observable, of } from 'rxjs';
import { Run } from 'src/app/run';
import * as routesData  from 'src/app/model/data/routesData.json';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { Landmark } from 'src/app/landmark';
import * as landmarksData from 'src/app/model/data/landmarksData.json';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  runProviderService: any;
  routeService: any;

  id: number;
  name: string;
  length: number;
  image: string;
  description: string;

  availableRoutes: Array<RouteService>;

  routeProgress: RouteProgress;
  routeProgressChange: Subject<RouteProgress> = new Subject<RouteProgress>();

  landmarksList: any;
  landmarksListChange: Subject<Array<any>> = new Subject<Array<any>>();

  runHistory: Array<Run>;

  constructor() {
    this.id;
    this.name;
    this.length;
    this.image;
    this.description;

    this.routeProgressChange.subscribe((routeProgress => {
      this.routeProgress = routeProgress;
//      console.log("Route service updated progress object");
    }));

  }

  setRunProviderService(runProviderService) {
    this.runProviderService = runProviderService;
  }

 // setLandmarkService(landmarkService) {
 //   this.landmarkService = landmarkService;
 // }

  getAvailableRoutes(): Observable<Array<RouteService>> {
    this.availableRoutes = [];
    (routesData as any).default.forEach(route => this.availableRoutes.push(route));
    return of(this.availableRoutes);
  }

  start(userId: number) {
//    console.log("Setting route progress obj");
/*     this.routeProgress = {
      userId: userId,
      routeId: this.id,
      routeName: this.name,
      finished: false,
      distanceLogged: 0,
      routeLength: this.length,
      percentComplete: 0
    }; */
    this.routeProgressChange.next(this.routeProgress = {
      userId: userId,
      routeId: this.id,
      routeName: this.name,
      finished: false,
      distanceLogged: 0,
      routeLength: this.length,
      percentComplete: 0
    });

    this.runHistory = [];

    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    localStorage.setItem("roofrat_runHistory", JSON.stringify(this.runHistory));
//    this.getRouteProgress();
  }

  finish() {
    this.routeProgress.finished = true;
    this.routeProgress.percentComplete = 100;
    this.routeProgressChange.next(this.routeProgress);
    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    return this.routeProgress;
  }

  updateProgress(distance): Observable<RouteProgress> {
    this.routeProgress.distanceLogged = distance;
    if (this.routeProgress.distanceLogged >= this.routeProgress.routeLength) {
      this.finish();
    } else {
      this.routeProgress.percentComplete = this.calculatePercentComplete(distance);
      this.routeProgressChange.next(this.routeProgress);
      localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    }
    
    return of(this.routeProgress);
  }

  calculatePercentComplete(distance) {
    let percentComplete = Math.round((distance/this.routeProgress.routeLength)*100);
    return percentComplete;
  }

  getRouteProgress(): Observable<RouteProgress> {
    //if (!this.routeProgress) {
      if (localStorage.getItem("roofrat_routeProgress")) {
        this.routeProgress = JSON.parse(localStorage.getItem("roofrat_routeProgress"));
        this.routeProgressChange.next(this.routeProgress);
        return of(this.routeProgress);
      } else {
        return of(null);
      }
  }

  clearRouteProgress() {
    localStorage.removeItem("roofrat_routeProgress");
    this.routeProgress = null;
    this.routeProgressChange.next(this.routeProgress);
    this.runProviderService.clearRouteProgress();
    return this.routeProgress;
  }

  getLandmarksList(): Observable<any> {
    //update to call API with route ID and distance
    //Split off returning this list without needing a server call/fresh calculation 
    // (user viewing landmarks without new progress) vs. 
    //  needing to pull it fresh (user logs a new run)
    this.landmarksList = [];
    let routeIdentifier = "route" + this.routeProgress.routeId;
    //iterate over landmarks list, adding each with mile < distance logged to this array
    (landmarksData as any).default[0][routeIdentifier].forEach(landmark => {
      if (landmark.mile <= this.routeProgress.distanceLogged) {
        this.landmarksList.push(landmark);
      }
    });
    //Sort landmarks by mile
    this.landmarksList.sort((a, b) => {
      return a.mile - b.mile;
    });
    this.landmarksListChange.next(this.landmarksList);
    return of(this.landmarksList);
  }

  getLandmark(landmarkId): Observable<Landmark> {
    //Need to consider scenarios where routeProgress hasn't been instantiated - could this happen when a user closes the window & reopens?
    //Should I run this as part of the app init somehow?
    let chosenLandmark: Landmark;
    let routeIdentifier = "route" + this.routeProgress.routeId;
    (landmarksData as any).default[0][routeIdentifier].forEach(landmark => {
      if (landmark.id == landmarkId) {
        chosenLandmark = landmark;
        return of(chosenLandmark);
      }
    });
    return of(chosenLandmark);
  }

}

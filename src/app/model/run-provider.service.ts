import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { Run } from 'src/app/run';
import { RouteService } from 'src/app/services/route.service';
import { RouteProgress } from 'src/app/routeProgress';
import { Landmark } from 'src/app/landmark';
import * as landmarksData from 'src/app/model/data/landmarksData.json';
import * as routesData from 'src/app/model/data/routesData.json';
import { HttpClient } from '@angular/common/http';
import { RouteSelectPageRoutingModule } from '../pages/route-select/route-select-routing.module';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class RunProviderService {

  runHistory: Array<Run>;
  routeProgress: RouteProgress;///////////////////////Moved to route class
  landmarksList: Array<Landmark>;
  landmarksData: Array<any>;

  runHistoryChange: Subject<Array<Run>> = new Subject<Array<Run>>();
  http: HttpClient;

  constructor(private routeService: RouteService) {
    /******************************************************* */
    this.runHistoryChange.subscribe((runHistory) =>  {
      this.runHistory = runHistory;
    });

    this.routeService.routeProgressChange.subscribe((routeProgress => {
      this.routeProgress = routeProgress;
    }));
    /******************************************************* */
  }
   //If working off local storage, make calculations about route progress here
   //Assume one route, one user; use run history to determine progress etc on the fly
   //If working off the server, the server will make all those calculations and return them via API

  addRun(date: Date, distance: number): Observable<Array<Run>> {
    //don't worry about creating an ID for now; use auto increment in db to assign an ID

    let newRun = {date: date, distance: distance};
    this.runHistory.push(newRun);
    this.runHistoryChange.next(this.runHistory);
    let totalDistance = this.calculateDistanceLogged(this.runHistory);
    this.routeService.updateProgress(totalDistance);

    this.updateLocalStorage("roofrat_runHistory", this.runHistory);

    return of(this.runHistory);
  }

  deleteRun(runIndex): Observable<Array<Run>> {
    //Call an API endpoint with the ID of the run to delete

    //move the below logic to the mock server
    //For now, delete run by index in absence of ID; when DB is set up, use ID instead
    this.runHistory.splice(runIndex, 1);
    this.runHistoryChange.next(this.runHistory);
    this.routeService.updateProgress(this.calculateDistanceLogged(this.runHistory));

    this.updateLocalStorage("roofrat_runHistory", this.runHistory);

    return of(this.runHistory);
  }

  getRunHistory(): Observable<Array<Run>> {
      //use local storage for quick app load; add a backup of checking the db for this later
      if (localStorage.getItem("roofrat_runHistory")) {
        this.runHistory = JSON.parse(localStorage.getItem("roofrat_runHistory"));
        return of(this.runHistory);
      } else {
         this.runHistory = [];
         this.runHistoryChange.next(this.runHistory);
         this.updateLocalStorage("roofrat_runHistory", this.runHistory);
         return of(this.runHistory);
      }
  }
//Deprecate this and use route service
  getRouteProgress() {
    //return routeProgress object
    this.routeService.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    }

  clearRouteProgress() {
    localStorage.removeItem("roofrat_runHistory");
    this.runHistory = [];
    this.runHistoryChange.next(this.runHistory);
    return this.runHistory;
  }

  calculateDistanceLogged(runs: Array<Run>) {
    let runDistance = 0;
    runs.forEach(run => {
      runDistance += Number(run.distance);
    });
    return runDistance;
  }

  updateLocalStorage(name: string, obj: Object) {
    let storageString = JSON.stringify(obj);
    localStorage.setItem(name, storageString);
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
    return of(this.landmarksList);
  }

  getLandmark(landmarkId): Observable<Landmark> {
    //Need to consider scenarios where routeProgress hasn't been instantiated - could this happen when a user closes the window & reopens?
    //Should I run this as part of the app init somehow?
    console.log(landmarkId);
    let chosenLandmark: Landmark;
    let routeIdentifier = "route" + this.routeProgress.routeId;
    console.log(routeIdentifier);
    (landmarksData as any).default[0][routeIdentifier].forEach(landmark => {
      if (landmark.id == landmarkId) {
        chosenLandmark = landmark;
        return of(chosenLandmark);
      }
    });
    return of(chosenLandmark);
  }
}

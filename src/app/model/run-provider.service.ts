import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { Run } from 'src/app/run';
import { Route } from 'src/app/route';
import { RouteProgress } from 'src/app/routeProgress';
import { Landmark } from 'src/app/landmark';
import * as landmarksData from 'src/app/model/data/landmarksData.json';
import * as routesData from 'src/app/model/data/routesData.json';
import { HttpClient } from '@angular/common/http';
import { RouteSelectPageRoutingModule } from '../pages/route-select/route-select-routing.module';

@Injectable({
  providedIn: 'root'
})
export class RunProviderService {


  availableRoutes: Array<Route>;
  runHistory: Array<Run>;
  routeProgress: RouteProgress;
  routeProgressChange: Subject<RouteProgress> = new Subject<RouteProgress>();
  landmarksList: Array<Landmark>;
  landmarksData: Array<any>;
/******************************************************* */
  runHistoryChange: Subject<Array<Run>> = new Subject<Array<Run>>();
/******************************************************* */
  constructor(private http: HttpClient) {
    /******************************************************* */
    this.runHistoryChange.subscribe((runHistory) =>  {
      this.runHistory = runHistory;
      console.log("Service run history change detected: ");
      console.log(this.runHistory);
    });

    this.routeProgressChange.subscribe((routeProgress => {
      this.routeProgress = routeProgress;
      console.log("Service route progress change detected: ");
      console.log(this.routeProgress);
    }));
    /******************************************************* */
  }
   //If working off local storage, make calculations about route progress here
   //Assume one route, one user; use run history to determine progress etc on the fly
   //If working off the server, the server will make all those calculations and return them via API

  getAvailableRoutes(): Observable<Array<Route>> {
    this.availableRoutes = [];
    (routesData as any).default.forEach(route => this.availableRoutes.push(route));
    console.log(this.availableRoutes);
    return of(this.availableRoutes);
  }

/*   getRouteInfoById(routeId: number): Observable<any> {
    let routeInfo = {routeName: "", routeLength: 0};

    for (let route of this.availableRoutes) {
      if (route.id == routeId) {
        routeInfo.routeName = route.name;
        routeInfo.routeLength = route.length;
        break;
      }
    }
    return of(routeInfo);
  } */

  startRoute(routeId: number, userId: number, routeName: string, routeLength: number) {
    console.log("Setting route progress obj");
    this.routeProgress = {
      userId: userId,
      routeId: routeId,
      routeName: routeName,
      finished: false,
      distanceLogged: 0,
      routeLength: routeLength,
      percentComplete: 0
    };
    this.routeProgressChange.next(this.routeProgress);
    console.log(this.routeProgress);
    //send the above to an API endpoint that will store it
    //set a runHistory obj
    this.runHistory = [];
    this.runHistoryChange.next(this.runHistory);
    //set a clean routeProgress and runHistory obj in local storage
    //Local storage can maybe be route progress + run history?  Or maybe just don't bother with local storage?
    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    localStorage.setItem("roofrat_runHistory", JSON.stringify(this.runHistory));
    //Send call to server with userID and route ID so that route progress with this
  }

  addRun(date: Date, distance: number):Observable<RouteProgress> {
    //don't worry about creating an ID for now; use auto increment in db to assign an ID
    if (!this.routeProgress) {
      this.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    }

    let newRun = {date: date, distance: distance};
//    console.log(this.runHistory);
    this.runHistory.push(newRun);
    this.runHistoryChange.next(this.runHistory);
//    console.log(this.runHistory);
    //Check for finish
    if (this.calculateDistanceLogged(this.runHistory) >= this.routeProgress.routeLength) {
      this.routeProgress = this.finishRoute(this.routeProgress);
      this.routeProgressChange.next(this.routeProgress);
    } else {
      this.routeProgress.distanceLogged = this.calculateDistanceLogged(this.runHistory);
      this.routeProgress.percentComplete = this.calculatePercentComplete(this.routeProgress.distanceLogged, this.routeProgress.routeLength);  
      this.routeProgressChange.next(this.routeProgress);//Send this update to observers
    }

    this.updateLocalStorage("roofrat_runHistory", this.runHistory);
    this.updateLocalStorage("roofrat_routeProgress", this.routeProgress);

    return of(this.routeProgress);

    //Call an API endpoint with the date, distance, and the current user's ID
    //API response will include updated routeProgress
  }

  deleteRun(runIndex) {
    //Call an API endpoint with the ID of the run to delete

    //move the below logic to the mock server
    //For now, delete run by index in absence of ID; when DB is set up, use ID instead
    this.runHistory.splice(runIndex, 1);
    this.runHistoryChange.next(this.runHistory);

    //check for finish
    if (this.calculateDistanceLogged(this.runHistory) >= this.routeProgress.routeLength) {
      this.routeProgress = this.finishRoute(this.routeProgress);
    } else {
      //these aren't updating on the UI right away
      //update distanceLogged
      this.routeProgress.distanceLogged = this.calculateDistanceLogged(this.runHistory);
      //update percentComplete
      this.routeProgress.percentComplete = this.calculatePercentComplete(this.routeProgress.distanceLogged, this.routeProgress.routeLength);
      this.routeProgressChange.next(this.routeProgress);
    }

    //update local storage
    this.updateLocalStorage("roofrat_runHistory", this.runHistory);
    this.updateLocalStorage("roofrat_routeProgress", this.routeProgress);

    return;
  }

  //get run history
  getRunHistory(): Observable<Array<Run>> {
      //use local storage for quick app load; add a backup of checking the db for this later
      if (localStorage.getItem("roofrat_runHistory")) {
        this.runHistory = JSON.parse(localStorage.getItem("roofrat_runHistory"));
        return of(this.runHistory);
      } else {
         this.runHistory = [];
         this.updateLocalStorage("roofrat_runHistory", this.runHistory);
         return of(this.runHistory);
      }
  }

  getRouteProgress(): Observable<RouteProgress> {
    //return routeProgress object
    //check local storage for roofrat object
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

    //Get route progress from the server for this user
    //Will get a routeProgress object in return
    //Parse the object into various properties that can be returned to specific components
    // --> Run history
    // --> Progress percent
    // --> Distance logged
  }

  clearRouteProgress() {
    localStorage.removeItem("roofrat_routeProgress");
    localStorage.removeItem("roofrat_runHistory");
    this.runHistory = [];
    this.runHistoryChange.next(this.runHistory);
    this.routeProgress = null;
    this.routeProgressChange.next(this.routeProgress);
//    this.getRouteProgress;
    return this.routeProgress;
  }

  finishRoute(routeProgress: RouteProgress): RouteProgress {
    this.routeProgress.finished = true;
    this.routeProgress.distanceLogged = routeProgress.routeLength;
    this.routeProgress.percentComplete = 100;
    this.routeProgressChange.next(this.routeProgress);
    return this.routeProgress;
  }

  calculateDistanceLogged(runs: Array<Run>) {
    let runDistance = 0;
    runs.forEach(run => {
      runDistance += Number(run.distance);
    });
    return runDistance;
  }

  calculatePercentComplete(distanceLogged: number, routeLength: number) {
    let percentComplete = Math.round((distanceLogged/routeLength)*100);
    return percentComplete;
  }
  //later: distance complete, started y/n, get landmarks

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

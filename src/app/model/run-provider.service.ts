import { Injectable } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { Run } from 'src/app/run';
import { Route } from 'src/app/route';
import { RouteProgress } from 'src/app/routeProgress';
import { Landmark } from 'src/app/landmark';
import * as landmarksData from 'src/app/model/data/landmarksData.json';
import * as routesData from 'src/app/model/data/routesData.json';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  constructor(private http: HttpClient) {

   }

   //If working off local storage, make calculations about route progress here
   //Assume one route, one user; use run history to determine progress etc on the fly

   //If working off the server, the server will make all those calculations and return them via API

  getAvailableRoutes(): Observable<Array<Route>> {
    this.availableRoutes = [];
//    (routesData as any).default.forEach(route => this.availableRoutes.push(route));
    this.http.get<Array<Route>>('http://localhost:5000/api/routes', {responseType: "json"})
    .subscribe(routes => {
      routes.forEach(route => this.availableRoutes.push(route));
      this.availableRoutes.sort((a, b) => {
        return a.id - b.id;
      });
    });
    console.log(this.availableRoutes);
    return of(this.availableRoutes);
  }

  getRouteLengthById(routeId: number): Observable<number> {
    let routeLength;
    for (let route of this.availableRoutes) {
      if (route.id == routeId) {
        routeLength = route.length;
        break;
      }
    }
    return of(routeLength);
  }

  startRoute(routeId: number, userId: number): Observable<RouteProgress> {
    let routeLength;
    this.getRouteLengthById(routeId)
      .subscribe(routeMiles => routeLength = routeMiles);
    //create user/route obj
    this.routeProgress = {
      userId: userId,
      routeId: routeId,
      finished: false,
      distanceLogged: 0,
      routeLength: routeLength,
      percentComplete: 0
    };
    //send the above to an API endpoint that will store it
    //set a runHistory obj
    this.runHistory = [];
    //set a clean routeProgress and runHistory obj in local storage
    //Local storage can maybe be route progress + run history?  Or maybe just don't bother with local storage?
    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    localStorage.setItem("roofrat_runHistory", JSON.stringify(this.runHistory));
    console.log(this.routeProgress);
    return of(this.routeProgress);
    //Send call to server with userID and route ID so that route progress with this
  }

  addRun(date: Date, distance: number):Observable<RouteProgress> {
    //don't worry about creating an ID for now; use auto increment in db to assign an ID
    if (!this.routeProgress) {
      this.getRouteProgress().subscribe(routeProgress => this.routeProgress = routeProgress);
    }

    let newRun = {date: date, distance: distance};
    console.log(this.runHistory);
    this.runHistory.push(newRun);
    console.log(this.runHistory);
    //Check for finish
    if (this.calculateDistanceLogged(this.runHistory) >= this.routeProgress.routeLength) {
      this.routeProgress = this.finishRoute(this.routeProgress);
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
    console.log(this.runHistory);

    //check for finish
    if (this.calculateDistanceLogged(this.runHistory) >= this.routeProgress.routeLength) {
      this.routeProgress = this.finishRoute(this.routeProgress);
    } else {
      //these aren't updating on the UI right away
      //update distanceLogged
      this.routeProgress.distanceLogged = this.calculateDistanceLogged(this.runHistory);
      //update percentComplete
      this.routeProgress.percentComplete = this.calculatePercentComplete(this.routeProgress.distanceLogged, this.routeProgress.routeLength);
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
    if (localStorage.getItem("roofrat_routeProgress")) {
      this.routeProgress = JSON.parse(localStorage.getItem("roofrat_routeProgress"));
      return of(this.routeProgress);
    } else {
      return of(null);
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
    this.routeProgress = null;
    return;
  }

  finishRoute(routeProgress: RouteProgress): RouteProgress {
    this.routeProgress.finished = true;
    this.routeProgress.distanceLogged = routeProgress.routeLength;
    this.routeProgress.percentComplete = 100;

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
    let percentComplete = (distanceLogged/routeLength)*100;
    return percentComplete;
  }
  //later: distance complete, started y/n, get landmarks

  updateLocalStorage(name: string, obj: Object) {
    let storageString = JSON.stringify(obj);
    console.log(obj);
    console.log(storageString);
    localStorage.setItem(name, storageString);
  }

  getLandmarksList(): Observable<any> {
    //update to call API with route ID and distance
    //Split off returning this list without needing a server call/fresh calculation 
    // (user viewing landmarks without new progress) vs. 
    //  needing to pull it fresh (user logs a new run)
    this.landmarksList = [];
//    let routeIdentifier = "route" + this.routeProgress.routeId;
    //iterate over landmarks list, adding each with mile < distance logged to this array
    let params = new HttpParams;
    params.append("routeId", this.routeProgress.routeId.toString());
    params.append("distance",this.routeProgress.distanceLogged.toString());
    this.http.get<Array<Landmark>>('http://localhost:5000/api/landmarks', {
      params: params,
      responseType: "json"})
    .subscribe(landmarks => {
      landmarks.forEach(landmark => this.landmarksList.push(landmark));
      this.landmarksList.sort((a, b) => {
        return a.id - b.id;
      });
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

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
    this.runHistoryChange.subscribe((runHistory) =>  {
      this.runHistory = runHistory;
    });

    this.routeService.routeProgressChange.subscribe((routeProgress => {
      this.routeProgress = routeProgress;
    }));
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
}

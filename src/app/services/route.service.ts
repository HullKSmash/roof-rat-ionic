import { Injectable } from '@angular/core';
import { RouteProgress } from '../routeProgress';
import { Subject } from 'rxjs';
import { Run } from 'src/app/run';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  id: number;
  name: string;
  length: number;
  image: string;
  description: string;

  routeProgress: RouteProgress;
  routeProgressChange: Subject<RouteProgress> = new Subject<RouteProgress>();

  runHistory: Array<Run>;

  constructor() {
    this.id;
    this.name;
    this.length;
    this.image;
    this.description;
  }

  start(userId: number) {
    console.log("Setting route progress obj");
    this.routeProgress = {
      userId: userId,
      routeId: this.id,
      routeName: this.name,
      finished: false,
      distanceLogged: 0,
      routeLength: length,
      percentComplete: 0
    };

    this.runHistory = [];

    localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
    this.routeProgressChange.next(this.routeProgress);
    localStorage.setItem("roofrat_runHistory", JSON.stringify(this.runHistory));

  }
}

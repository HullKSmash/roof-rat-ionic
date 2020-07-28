import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { Route } from 'src/app/route';
import { RouteProgress } from 'src/app/routeProgress';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route-select',
  templateUrl: './route-select.page.html',
  styleUrls: ['./route-select.page.scss'],
})
export class RouteSelectPage implements OnInit {

  availableRoutes: Array<Route>;
  routeProgress: RouteProgress;
  testRoute: Route;

  constructor(
    private runProviderService: RunProviderService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getAvailableRoutes();
  }

  getAvailableRoutes() {
    this.runProviderService.getAvailableRoutes()
      .subscribe(routes => this.availableRoutes = routes);
  }

  startRoute(routeId: number, routeName: string, routeLength: number) {
        //*****************TODO: Add a check for route already in progress? */
    console.log("starting route");
    this.runProviderService.startRoute(routeId, 1, routeName, routeLength);
    //wait to redirect until provder has responded?
  }
}

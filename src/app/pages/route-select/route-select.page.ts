import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { Route } from 'src/app/route';
import { RouteProgress } from 'src/app/routeProgress';

@Component({
  selector: 'app-route-select',
  templateUrl: './route-select.page.html',
  styleUrls: ['./route-select.page.scss'],
})
export class RouteSelectPage implements OnInit {

  availableRoutes: Array<Route>;
  routeProgress: RouteProgress;

  constructor(
    private runProviderService: RunProviderService,
  ) { }

  ngOnInit() {
    this.getAvailableRoutes();
  }

  getAvailableRoutes() {
    //calls provider for routes
    console.log("Getting available routes");
    this.runProviderService.getAvailableRoutes()
      .subscribe(routes => this.availableRoutes = routes);
    console.log(this.availableRoutes);
    this.availableRoutes.forEach(route => console.log(route.length));
//    console.log(this.availableRoutes);
  }

  startRoute(routeId: number) {
        //*****************TODO: Add a check for route already in progress? */
    console.log("starting route");
    this.runProviderService.startRoute(routeId, 1)
    .subscribe(routeProgress => this.routeProgress = routeProgress);
    //wait to redirect until provder has responded?
  }
}

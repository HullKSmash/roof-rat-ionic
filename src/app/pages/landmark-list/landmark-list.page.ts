import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteProgress } from 'src/app/routeProgress';
import { RouteService } from 'src/app/services/route.service';


@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.page.html',
  styleUrls: ['./landmark-list.page.scss'],
})
export class LandmarkListPage implements OnInit {

  landmarksList: Array<any>;
  paramsList: string;
  routeProgress: RouteProgress;

  constructor(
    private runProviderService: RunProviderService,
    private routeService: RouteService,
  ) { }

  ngOnInit() {
//    this.runProviderService.getRouteProgress();
    this.routeService.landmarksListChange.subscribe((landmarksList) => this.landmarksList = landmarksList);
    this.routeService.getRouteProgress().subscribe(routeProgress => {
      this.routeProgress = routeProgress;
      this.routeService.getLandmarksList()
      .subscribe(landmarksList => this.landmarksList = landmarksList);
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';

@Component({
  selector: 'app-landmark-list',
  templateUrl: './landmark-list.page.html',
  styleUrls: ['./landmark-list.page.scss'],
})
export class LandmarkListPage implements OnInit {

  landmarksList: Array<any>;
  paramsList: string;

  constructor(
    private runProviderService: RunProviderService
  ) { }

  ngOnInit() {
    this.runProviderService.getRouteProgress();

    this.runProviderService.getLandmarksList()
      .subscribe(landmarksList => this.landmarksList = landmarksList);

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RunProviderService } from 'src/app/model/run-provider.service';

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.page.html',
  styleUrls: ['./landmark.page.scss'],
})
export class LandmarkPage implements OnInit {

  landmarkId: number;
  landmark: Object;

  constructor(private route: ActivatedRoute, 
    private RunProviderService: RunProviderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
    this.RunProviderService.getLandmark(params.id).subscribe(landmark => {
        this.landmark = landmark;
      });
      console.log(this.landmark);
    });

//    this.RunProviderService.getLandmark(this.landmarkId);
    //In server/API land, get landmark by ID in the query
    //In client land, load landmark object
  }

}
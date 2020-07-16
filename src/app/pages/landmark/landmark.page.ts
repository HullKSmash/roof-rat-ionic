import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { Landmark } from 'src/app/landmark';

@Component({
  selector: 'app-landmark',
  templateUrl: './landmark.page.html',
  styleUrls: ['./landmark.page.scss'],
})
export class LandmarkPage implements OnInit {

  landmarkId: number;
  landmark: Landmark;

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

    //In server/API land, get landmark by ID in the query
    //In client land, load landmark object
  }

}
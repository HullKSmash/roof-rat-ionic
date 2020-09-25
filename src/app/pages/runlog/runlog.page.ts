import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Run } from 'src/app/run';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-runlog',
  templateUrl: './runlog.page.html',
  styleUrls: ['./runlog.page.scss'],
})

export class RunlogPage implements OnInit {

  runForm: FormGroup;
  newRunDistanceCtrl: FormControl;
  newRunDateCtrl: FormControl;

  newRunDistance: number;
  newRunDate: Date;
  runHistory: Array<Run>;

  finished: Boolean;

  @ViewChild('formDirective', {}) private formDirective: NgForm;
  
  constructor(    
    private fb: FormBuilder,
    private runProviderService: RunProviderService,
    private routeService: RouteService
    ) {
      this.createForm();
      this.runHistory;
   }

  ngOnInit() {
    // Create form controls
    this.newRunDateCtrl;
    this.newRunDistanceCtrl;
    this.checkFinish();
    this.runProviderService.runHistoryChange.subscribe(runHistory => this.runHistory = runHistory);
    this.runProviderService.getRunHistory().subscribe(runHistory => this.runHistory = runHistory);
//    this.getRunHistory();
  }

  createForm() {
    // Create form - need to add form elements to UI
    this.runForm = this.fb.group({
        newRunDistanceCtrl: ['', Validators.required],//Validators seem to not be working
        newRunDateCtrl: ['', Validators.required]
    });
  }

  onSubmit() {
    // Add run and reset form on submission
    console.log("Submitted:  " + this.runForm.value.newRunDateCtrl.toString() + this.runForm.value.newRunDistanceCtrl);
    this.addRun(this.runForm.value.newRunDateCtrl, this.runForm.value.newRunDistanceCtrl);
    this.runForm.reset();
    this.formDirective.resetForm();
  }

  getRunHistory() {
//    this.runProviderService.getRunHistory()
//      .subscribe(runHistory => this.runHistory = runHistory);
//      console.log(this.runHistory);
//    return this.runHistory;
    return this.runProviderService.runHistory;
  }

  addRun(date: Date, distance: number) {
    this.runProviderService.addRun(date, distance);
    console.log("Run history in runlog page: ");
    console.log(this.runHistory);
  }

  checkFinish() {
    this.routeService.getRouteProgress().
      subscribe(routeProgress =>  {
        if (!routeProgress) {
          this.finished = false;
        } else {
          this.finished = routeProgress.finished;
        }
      });
  }

  deleteRun(runIndex) {
    //send the index of the run - eventually these will have an ID associated with them
    //delete it by index
    console.log(runIndex);
    this.runProviderService.deleteRun(runIndex);
  }

}

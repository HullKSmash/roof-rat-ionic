import { Component, OnInit } from '@angular/core';
import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteService } from 'src/app/services/route.service';
import { RouteProgress } from 'src/app/routeProgress';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-route-select',
  templateUrl: './route-select.page.html',
  styleUrls: ['./route-select.page.scss'],
  providers: [RouteService]
})
export class RouteSelectPage implements OnInit {

  availableRoutes: Array<RouteService>;
  routeProgress: RouteProgress;
  testRoute: RouteService;

  constructor(
    private runProviderService: RunProviderService,
    private http: HttpClient,
    public alertController: AlertController,
    private routeProvider: RouteService
  ) { }

  ngOnInit() {
    this.getAvailableRoutes();
    this.showAlert();
  }

  getAvailableRoutes() {
    this.runProviderService.getAvailableRoutes()
      .subscribe(routes => {
        this.availableRoutes = [];
        routes.forEach( route => {
          var newRoute = Object.assign(new RouteService(), route);
          this.availableRoutes.push(newRoute);
        });
        console.log(this.availableRoutes);
      })
  }

  startRoute(route: RouteService) {
        //*****************TODO: Add a check for route already in progress? */
        route.start(1);
//    this.runProviderService.startRoute(routeId, 1, routeName, routeLength);
    //wait to redirect until provder has responded?
  }

  showAlert() {
    console.log("Showing alert");
    this.alertController.create({
      header: "Before you get started...",
      subHeader: "How this app works",
      message: `This application uses local storage on your device to remember you and your progress on routes.  \
      If you clear your local storage on your device, your run history and progress will be deleted.<br><br> \
      Upon your first visit to the app, select a route that you would like to complete.  Log the distance \
      and date of runs that you complete under the Run Log tab.  As you complete runs, visit the Route \
      tab to see your progress on the route and view landmarks as you pass them.<br><br> \
      Under Settings, you can see your current route selection and abandon it at any time.  Abandoning \
      your route will also delete your run history and all progress against the route.  You may restart \
      the route or choose another from the run selection page.`,
      buttons: ['Got it']
    }).then(res => {
      res.present();
    })
  }
}

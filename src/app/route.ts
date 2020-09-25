/* import { RunProviderService } from 'src/app/model/run-provider.service';
import { RouteProgress } from './routeProgress';
import { Run } from 'src/app/run';
import { Observable, of, Subject} from 'rxjs';

export class Route {

    id: number;
    name: string;
    length: number;
    image: string;
    description: string;

    runHistory: Array<Run>;
    routeProgress: RouteProgress;

    routeProgressChange: Subject<RouteProgress> = new Subject<RouteProgress>();
    runProviderService: RunProviderService;

//    constructor() {}
     constructor() {
        this.id;
        this.name;
        this.length;
        this.image;
        this.description;
        this.runProviderService;
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

        this.runProviderService.getRunHistory().subscribe(runHistory => this.runHistory = runHistory);

        localStorage.setItem("roofrat_routeProgress", JSON.stringify(this.routeProgress));
        this.runProviderService.setRouteProgress(this.routeProgress);
        //this.routeProgressChange.next(this.routeProgress);

        console.log(this.routeProgress);
        //send the above to an API endpoint that will store it
        //set a runHistory obj

//        this.runHistory = [];
//        this.runHistoryChange.next(this.runHistory);     //Where should this subject live?  
        //set a clean routeProgress and runHistory obj in local storage
        //Local storage can maybe be route progress + run history?  Or maybe just don't bother with local storage?


        //Send call to server with userID and route ID so that route progress with this
      }

} */
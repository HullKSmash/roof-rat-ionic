import { Run } from 'src/app/run';

export class RouteProgress {
    userId: number;
    routeId: number;
    routeName: string;
    finished: Boolean;
    distanceLogged: number;
    routeLength: number;
    percentComplete: number;
}
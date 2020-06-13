import { Run } from 'src/app/run';

export interface RouteProgress {
    userId: number,
    routeId: number,
    finished: Boolean;
    distanceLogged: number;
    routeLength: number;
    percentComplete: number;
}
import { routesDetails, routesModel } from "./routesdetails";
const routes = new routesDetails();
export const Routes: routesModel[] = [
  routes.Home,
  routes.Network,
  routes.Job,
  routes.Message,
];

import { useEffect } from "react";
import { RouteObject, useLocation, useRoutes } from "react-router-dom";
import { ITemplate } from "./types";
import sample from "./modules/templates";
import lazyLoad from "./lazyLoad";

export declare type IRouteObject = Omit<RouteObject, "children"> & {
  children?: IRouteObject[];
};

const templates: ITemplate[] = [...sample];

export const rootRouter: IRouteObject[] = [
  {
    path: "/",
    element: lazyLoad(() => import("./RouterPage")),
  },
  ...templates,
];

const Router = () => {
  const location = useLocation();
  const routes = useRoutes(rootRouter as RouteObject[]);

  useEffect(() => {
    console.log("relocated!", location.pathname);
  }, [location]);
  return routes;
};

export default Router;

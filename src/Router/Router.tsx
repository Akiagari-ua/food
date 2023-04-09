import { FC, PropsWithChildren, useMemo } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import AppRoutes from "../routes/appLinks";
import { buildRouterObject } from "./utils";

const Router: FC<PropsWithChildren> = () => {
  const routes: RouteObject[] = useMemo(
    () =>
      AppRoutes.map(({ moduleName, path, children }) =>
        buildRouterObject({ moduleName, path, children })
      ).filter((i) => i) as RouteObject[],
    []
  );

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} fallbackElement={<div>Falllll</div>} />
  );
};

export default Router;

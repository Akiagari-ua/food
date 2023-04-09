import type { RouteObject } from "react-router";
import type { AppRoutesType } from "../routes/appLinks";

export function buildRouterObject(
  { moduleName, path, children }: AppRoutesType,
  //NOTE: customImport needs for tests
  customImport?: Function
): RouteObject | undefined {
  let Page;
  let childrenRoutes: RouteObject[] = [];

  const routerObject: RouteObject = {};

  try {
    Page = customImport
      ? customImport(`../routes/${moduleName}/index.ts`).default
      : require(`../routes/${moduleName}/index.ts`).default;
  } catch (err) {
    console.error(err);
  }

  if (children && children.length) {
    childrenRoutes = children
      .map((child) => buildRouterObject(child, customImport))
      .filter((i) => i) as RouteObject[];
  }

  if (!Page) return;

  routerObject.path = path;
  routerObject.element = (<Page />) as JSX.Element;

  if (childrenRoutes && childrenRoutes.length) {
    routerObject.children = childrenRoutes;
  }

  return routerObject;
}

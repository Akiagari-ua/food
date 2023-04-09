export enum ModuleNames {
  APP = "App",
  LOGIN = "Login",
}

export const AppLinks = {
  [ModuleNames.APP]: "/",
  [ModuleNames.LOGIN]: "/login",
} as const;

export type Path = typeof AppLinks[keyof typeof AppLinks];

export interface AppRoutesObject {
  moduleName: ModuleNames;
  path: Path;
}

export interface AppRoutesType extends AppRoutesObject {
  children?: AppRoutesObject[];
}

const AppRoutes: AppRoutesType[] = [
  {
    moduleName: ModuleNames.APP,
    path: AppLinks[ModuleNames.APP],
  },
  {
    moduleName: ModuleNames.LOGIN,
    path: AppLinks[ModuleNames.LOGIN],
  },
];

export default AppRoutes;

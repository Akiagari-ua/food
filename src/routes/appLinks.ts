export enum ModuleNames {
  APP = "App",
  LOGIN = "Login",
  TEST = "Test",
}

export const AppLinks = {
  [ModuleNames.APP]: "/",
  [ModuleNames.LOGIN]: "/login",
  [ModuleNames.TEST]: "/test",
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
    children: [
      {
        moduleName: ModuleNames.TEST,
        path: AppLinks[ModuleNames.TEST],
      },
    ],
  },
  {
    moduleName: ModuleNames.LOGIN,
    path: AppLinks[ModuleNames.LOGIN],
  },
];

export default AppRoutes;

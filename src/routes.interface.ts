export interface ChildRoute {
  path: string;
  module: any;
}
export interface Route {
  path: string;
  module: any;
  children?: ChildRoute;
}

export type Routes = Route[];

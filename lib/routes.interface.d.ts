/**
 * Defines the Child Route
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the child Module.
 */
export interface ChildRoute {
    path: string;
    module: any;
}
/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `children` - the child Module.
 */
export interface Route {
    path: string;
    module: any;
    children?: ChildRoute;
}
/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `children` - the child Module.
 */
export declare type Routes = Route[];

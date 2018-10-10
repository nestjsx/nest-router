/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `controller` - the parent Controller.
 * - `children` - an array of child Modules.
 * - `childrens` @deprecated - @see children
 */
export interface Route {
    path: string;
    module?: any;
    controller?: any;
    childrens?: any[];
    children?: any[];
}
/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `children` - an array of child Modules.
 * - `childrens` @deprecated - @see children
 */
export declare type Routes = Route[];

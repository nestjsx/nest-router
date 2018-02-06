/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `childrens` - an array of the child Modules.
 */
export interface Route {
    path: string;
    module?: any;
    childrens?: any[];
}
/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `childrens` - an array of the child Module.
 */
export declare type Routes = Route[];

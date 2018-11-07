/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `children` - an array of child Modules.
 * - `childrens` @deprecated - @see children
 */
export interface Route {
  path: string;
  module?: any;
  childrens?: any[];
  children?: Route[];
}

/**
 * Defines the Routes Tree
 * - `path` - a string describe the Module path which will be applied
 * to all it's controllers and childs
 * - `module` - the parent Module.
 * - `children` - an array of child Modules.
 * - `childrens` @deprecated - @see children
 */
export type Routes = Route[];

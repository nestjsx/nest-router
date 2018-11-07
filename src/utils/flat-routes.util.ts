import { isString } from 'util';
import { Routes } from '../routes.interface';
import { validatePath } from './validate-path.util';

const result = [];
export function flatRoutes(routes: Routes) {
  routes.forEach(element => {
    if (element.module && element.path) {
      result.push(element);
    }
    // this block will be removed soon
    if (!element.children && element.childrens) {
      element.children = element.childrens;
      console.log(
        `\x1b[33m%s\x1b[0m`,
        `WARNING: 'childrens' is deprecated, use 'children' instead.`,
      );
    }
    if (element.children) {
      const childrenRef = element.children as Routes;
      childrenRef.forEach(child => {
        if (!isString(child) && child.path) {
          child.path = validatePath(validatePath(element.path) + validatePath(child.path));
        } else {
          result.push({ path: element.path, module: child });
        }
      });
      return flatRoutes(childrenRef);
    }
  });
  result.forEach(route => {
    delete route.children;
  });
  return result;
}

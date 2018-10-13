import { isString } from 'util';
import { Routes } from '../routes.interface';
import { validatePath } from './validate-path.util';

const result = [];
export function flatRoutes(routes: Routes) {
  routes.forEach(element => {
    if ((element.module || element.controller) && element.path) {
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
      element.children.forEach(child => {
        if (!isString(child) && child.path) {
          child.path = validatePath(validatePath(element.path) + validatePath(child.path));
        } else {
          child = { path: element.path, module: child };
          result.push(child);
        }
      });
      return flatRoutes(element.children);
    }
  });
  result.forEach(route => {
    delete route.children;
  });
  return result;
}

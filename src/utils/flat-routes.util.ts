import { isString } from 'util';
import { Routes } from '../routes.interface';
import { validatePath } from './validate-path.util';

const result = [];
export function flatRoutes(routes: Routes) {
  routes.forEach(element => {
    if (element.module && element.path) {
      result.push(element);
    }
    if (element.childrens) {
      element.childrens.forEach(child => {
        if (!isString(child) && child.path) {
          child.path = validatePath(validatePath(element.path) + validatePath(child.path));
        } else {
          child = { path: element.path, module: child };
          result.push(child);
        }
      });
      return flatRoutes(element.childrens);
    }
  });
  result.forEach(route => {
    delete route.childrens;
  });
  return result;
}

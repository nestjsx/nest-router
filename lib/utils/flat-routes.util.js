"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const validate_path_util_1 = require("./validate-path.util");
const result = [];
function flatRoutes(routes) {
    routes.forEach(element => {
        if (element.module && element.path) {
            result.push(element);
        }
        // this block will be removed soon
        if (!element.children && element.childrens) {
            element.children = element.childrens;
            console.log(`\x1b[33m%s\x1b[0m`, `WARNING: 'childrens' is deprecated, use 'children' instead.`);
        }
        if (element.children) {
            element.children.forEach(child => {
                if (!util_1.isString(child) && child.path) {
                    child.path = validate_path_util_1.validatePath(validate_path_util_1.validatePath(element.path) + validate_path_util_1.validatePath(child.path));
                }
                else {
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
exports.flatRoutes = flatRoutes;
//# sourceMappingURL=flat-routes.util.js.map
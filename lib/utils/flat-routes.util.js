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
        if (element.childrens) {
            element.childrens.forEach(child => {
                if (!util_1.isString(child) && child.path) {
                    child.path = validate_path_util_1.validatePath(validate_path_util_1.validatePath(element.path) + validate_path_util_1.validatePath(child.path));
                }
                else {
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
exports.flatRoutes = flatRoutes;

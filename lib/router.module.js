"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const validate_path_util_1 = require("./utils/validate-path.util");
const flat_routes_util_1 = require("./utils/flat-routes.util");
const MODULE_PATH = '__module_path__';
/**
 * A utility Module to Organize your Routes,
 * it could be imported in the Root Module of you application.
 */
let RouterModule = RouterModule_1 = class RouterModule {
    /**
     * takes an array of modules and organize them in hierarchy way
     * @param {Routes} routes Array of Routes
     */
    static forRoutes(routes) {
        RouterModule_1.buildPathMap(routes);
        return {
            module: RouterModule_1,
        };
    }
    static buildPathMap(routes) {
        const flattenRoutes = flat_routes_util_1.flatRoutes(routes);
        flattenRoutes.forEach(route => {
            Reflect.defineMetadata(MODULE_PATH, validate_path_util_1.validatePath(route.path), route.module);
        });
    }
};
RouterModule = RouterModule_1 = __decorate([
    common_1.Module({})
], RouterModule);
exports.RouterModule = RouterModule;
var RouterModule_1;

import { Module, DynamicModule } from '@nestjs/common';
import { MODULE_PATH, PATH_METADATA } from '@nestjs/common/constants';
import { ModulesContainer } from '@nestjs/core/injector/modules-container';
import { Controller, Type } from '@nestjs/common/interfaces';
import { UnknownElementException } from '@nestjs/core/errors/exceptions/unknown-element.exception';
import { validatePath } from './utils/validate-path.util';
import { flatRoutes } from './utils/flat-routes.util';
import { Routes } from './routes.interface';

/**
 * A utility Module to Organize your Routes,
 * it could be imported in the Root Module of you application.
 */
@Module({})
export class RouterModule {
  private static readonly routesContainer: Map<string, string> = new Map();
  constructor(readonly modulesContainer: ModulesContainer) {
    const modules = [...modulesContainer.values()];
    for (const nestModule of modules) {
      const modulePath: string = Reflect.getMetadata(MODULE_PATH, nestModule.metatype);
      for (const route of nestModule.routes.values()) {
        RouterModule.routesContainer.set(route.name, validatePath(modulePath));
      }
    }
  }

  /**
   * takes an array of modules and organize them in hierarchy way
   * @param {Routes} routes Array of Routes
   */
  public static forRoutes(routes: Routes): DynamicModule {
    RouterModule.buildPathMap(routes);
    return {
      module: RouterModule,
    };
  }

  /**
   * get the controller full route path eg: (controller's module prefix + controller's path).
   * @param {Type<Controller>} controller the controller you need to get it's full path
   */
  public static resolvePath(controller: Type<Controller>): string {
    const controllerPath: string = Reflect.getMetadata(PATH_METADATA, controller);
    const modulePath = RouterModule.routesContainer.get(controller.name);
    if (modulePath && controllerPath) {
      return validatePath(modulePath + validatePath(controllerPath));
    } else {
      throw new UnknownElementException();
    }
  }

  private static buildPathMap(routes: Routes) {
    const flattenRoutes = flatRoutes(routes);
    flattenRoutes.forEach(route => {
      Reflect.defineMetadata(MODULE_PATH, validatePath(route.path), route.module);
    });
  }
}

import { Module, DynamicModule } from '@nestjs/common';
import { validatePath } from './utils/validate-path.util';
import { flatRoutes } from './utils/flat-routes.util';
import { Routes } from './routes.interface';
const MODULE_PATH = '__module_path__';
/**
 * A utility Module to Organize your Routes,
 * it could be imported in the Root Module of you application.
 */
@Module({})
export class RouterModule {
  /**
   * takes an array of modules and organize them in hierarchy way
   * @param routes {Routes} Array of Routes
   */
  public static forRoutes(routes: Routes): DynamicModule {
    RouterModule.buildPathMap(routes);
    return {
      module: RouterModule,
    };
  }
  private static buildPathMap(routes: Routes) {
    const flattenRoutes = flatRoutes(routes);
    flattenRoutes.forEach(route => {
      Reflect.defineMetadata(MODULE_PATH, validatePath(route.path), route.module);
    });
  }
}

import { Module, DynamicModule } from '@nestjs/common';
import { validatePath } from './utils/validate-path.util';
import { Routes } from './routes.interface';
const MODULE_PATH = '__module_path__';
@Module({})
export class RouterModule {
  public static forRoutes(routes: Routes): DynamicModule {
    RouterModule.buildPathMap(routes);
    return {
      module: RouterModule,
    };
  }
  private static buildPathMap(routes: Routes) {
    routes.forEach(route => {
      route.children.path = validatePath(
        validatePath(route.path) + validatePath(route.children.path),
      );
    });
    routes.forEach(route => {
      Reflect.defineMetadata(MODULE_PATH, validatePath(route.path), route.module);
      Reflect.defineMetadata(MODULE_PATH, validatePath(route.children.path), route.children.module);
    });
  }
}

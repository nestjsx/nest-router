import { RouterModule } from '../router.module';
import { Route, Routes } from '../routes.interface';
import { Module } from '@nestjs/common';
describe('RouterModule', () => {
  const MODULE_PATH = '__module_path__';

  @Module({})
  class ParentModule {}
  @Module({})
  class ChildModule {}
  const routes: Routes = [
    {
      path: 'parent',
      module: ParentModule,
      children: {
        path: 'child',
        module: ChildModule,
      },
    },
  ];
  @Module({ imports: [ParentModule, ChildModule, RouterModule.forRoutes(routes)] })
  class MainModule {}

  test('it Should add Path Metadata to all Routes', () => {
    const parentPath = Reflect.getMetadata(MODULE_PATH, ParentModule);
    const childPath = Reflect.getMetadata(MODULE_PATH, ChildModule);
    expect(parentPath).toEqual('/parent');
    expect(childPath).toEqual('/parent/child');
  });
});

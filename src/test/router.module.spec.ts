import { RouterModule } from '../router.module';
import { Route, Routes } from '../routes.interface';
import { Module } from '@nestjs/common';
describe('RouterModule', () => {
  const MODULE_PATH = '__module_path__';

  @Module({})
  class ParentModule {}
  @Module({})
  class ChildModule {}

  @Module({})
  class AuthModule {}
  @Module({})
  class PaymentsModule {}

  const routes1: Routes = [
    {
      path: 'parent',
      module: ParentModule,
      childrens: [
        {
          path: 'child',
          module: ChildModule,
        },
      ],
    },
  ];
  const routes2: Routes = [{ path: 'v1', childrens: [AuthModule, PaymentsModule] }];

  @Module({ imports: [ParentModule, ChildModule, RouterModule.forRoutes(routes1)] })
  class MainModule {}

  @Module({ imports: [AuthModule, PaymentsModule, RouterModule.forRoutes(routes2)] })
  class AppModule {}

  test('it should add Path Metadata to all Routes', () => {
    const parentPath = Reflect.getMetadata(MODULE_PATH, ParentModule);
    const childPath = Reflect.getMetadata(MODULE_PATH, ChildModule);
    expect(parentPath).toEqual('/parent');
    expect(childPath).toEqual('/parent/child');
  });

  test('it should add paths even we omitted the module keyword', () => {
    const authPath = Reflect.getMetadata(MODULE_PATH, AuthModule);
    const paymentPath = Reflect.getMetadata(MODULE_PATH, PaymentsModule);
    expect(authPath).toEqual('/v1');
    expect(paymentPath).toEqual('/v1');
  });
});

import { RouterModule } from '../router.module';
import { Routes } from '../routes.interface';
import { Module, Controller } from '@nestjs/common';
import { MODULE_PATH } from '@nestjs/common/constants';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';

describe('RouterModule', () => {
  let app: INestApplication;

  @Controller('/parent-controller')
  class ParentController {}
  @Controller('/child-controller')
  class ChildController {}
  @Controller('no-slash-controller')
  class NoSlashController {}

  class UnknownController {}
  @Module({ controllers: [ParentController] })
  class ParentModule {}

  @Module({ controllers: [ChildController] })
  class ChildModule {}

  @Module({})
  class AuthModule {}
  @Module({})
  class PaymentsModule {}

  @Module({ controllers: [NoSlashController] })
  class NoSlashModule {}

  const routes1: Routes = [
    {
      path: 'parent',
      module: ParentModule,
      children: [
        {
          path: 'child',
          module: ChildModule,
        },
      ],
    },
  ];
  const routes2: Routes = [{ path: 'v1', children: [AuthModule, PaymentsModule, NoSlashModule] }];

  @Module({ imports: [ParentModule, ChildModule, RouterModule.forRoutes(routes1)] })
  class MainModule {}

  @Module({ imports: [AuthModule, PaymentsModule, NoSlashModule, RouterModule.forRoutes(routes2)] })
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

  describe('Full Running App', async () => {
    beforeAll(async () => {
      const module = await Test.createTestingModule({
        imports: [MainModule, AppModule],
      }).compile();
      app = module.createNestApplication();
      await app.init();
    });

    it('should Resolve Controllers path with its Module Path if any', async () => {
      expect(RouterModule.resolvePath(ParentController)).toEqual('/parent/parent-controller');
      expect(RouterModule.resolvePath(ChildController)).toEqual('/parent/child/child-controller');
    });

    it('should throw error when we cannot find the controller', async () => {
      expect(() => RouterModule.resolvePath(UnknownController)).toThrowError(
        'Nest cannot find given element (it does not exist in current context)',
      );
    });

    it('should resolve controllers path concatinated with its module path correctly', async () => {
      expect(RouterModule.resolvePath(NoSlashController)).toEqual('/v1/no-slash-controller');
    });

    afterAll(async () => {
      await app.close();
    });
  });
});

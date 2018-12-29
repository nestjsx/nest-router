import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RouterModule, Route } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { NinjaModule } from './ninja/ninja.module';
import { routes } from './routes';
import { LoggerMiddleware } from './logger.middleware';
@Module({
  imports: [RouterModule.forRoutes(routes), CatsModule, DogsModule, NinjaModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .with({ path: '/ninja' } as Route)
      .forRoutes('/');
  }
}

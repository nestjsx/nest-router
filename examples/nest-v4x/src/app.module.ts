import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { NinjaModule } from './ninja/ninja.module';
import { routes } from './routes';
@Module({
  imports: [RouterModule.forRoutes(routes), CatsModule, DogsModule, NinjaModule],
})
export class ApplicationModule {}

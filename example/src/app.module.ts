import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { NinjaModule } from './ninja/ninja.module';
const routes: Routes = [
  {
    path: '/ninja',
    module: NinjaModule,
    children: {
      path: '/cats',
      module: CatsModule,
    },
  },
  {
    path: '/ninja',
    module: NinjaModule,
    children: {
      path: '/dogs',
      module: DogsModule,
    },
  },
];
@Module({
  imports: [CatsModule, DogsModule, NinjaModule],
})
export class ApplicationModule {
  constructor() {
    RouterModule.forRoutes(routes);
  }
}

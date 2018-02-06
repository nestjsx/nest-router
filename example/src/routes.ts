import { Routes } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { NinjaModule } from './ninja/ninja.module';
export const routes: Routes = [
  {
    path: '/ninja',
    module: NinjaModule,
    childrens: [{ path: '/cats', module: CatsModule }, { path: '/dogs', module: DogsModule }],
  },
];

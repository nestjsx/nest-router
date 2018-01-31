import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { PuppyController } from './puppy.controller';

@Module({
  controllers: [DogsController, PuppyController],
})
export class DogsModule {}

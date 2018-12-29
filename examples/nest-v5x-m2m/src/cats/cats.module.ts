import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { KettyController } from './ketty.controller';

@Module({
  controllers: [CatsController, KettyController],
})
export class CatsModule {}

import { Module } from '@nestjs/common';
import { NinjaController } from './ninja.controller';
import { KatanaController } from './katana.controller';

@Module({
  controllers: [NinjaController, KatanaController],
})
export class NinjaModule {}

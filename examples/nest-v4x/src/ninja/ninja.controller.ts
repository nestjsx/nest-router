import { Controller, Get } from '@nestjs/common';

@Controller()
export class NinjaController {
  @Get('/')
  sayHello() {
    return `Hello From NinjaController`;
  }
}

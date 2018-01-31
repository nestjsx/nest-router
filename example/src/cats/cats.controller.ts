import { Controller, Get } from '@nestjs/common';

@Controller()
export class CatsController {
  @Get('/')
  sayHello() {
    return `Hello From CatsController`;
  }
}

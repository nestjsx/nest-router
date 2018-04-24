import { Controller, Get } from '@nestjs/common';

@Controller()
export class DogsController {
  @Get('/')
  sayHello() {
    return `Hello From DogsController`;
  }
}

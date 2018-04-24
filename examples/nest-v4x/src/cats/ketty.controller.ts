import { Controller, Get } from '@nestjs/common';

@Controller('/ketty')
export class KettyController {
  @Get('/')
  sayHello() {
    return `Hello From KettyController`;
  }
}

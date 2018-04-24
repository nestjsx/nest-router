import { Controller, Get } from '@nestjs/common';

@Controller('/katana')
export class KatanaController {
  @Get('/')
  sayHello() {
    return `Hello From KatanaController`;
  }
}

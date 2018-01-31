import { Controller, Get } from '@nestjs/common';

@Controller('/puppy')
export class PuppyController {
  @Get('/')
  sayHello() {
    return `Hello From PuppyController`;
  }
}

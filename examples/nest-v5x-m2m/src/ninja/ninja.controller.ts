import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller()
export class NinjaController {
  private readonly ninjas: string[] = [];
  @Get('/')
  sayHello() {
    return `Hello From NinjaController`;
  }

  @Get('/all')
  getAllNinja() {
    return this.ninjas;
  }

  @Get('/:ninjaId')
  getNinja(@Param('ninjaId') id: string) {
    const idx = parseInt(id, 10) || 0;
    return { ninja: this.ninjas[idx - 1] || null };
  }

  @Post('/create')
  createNinja(@Body('name') name: string) {
    const id = this.ninjas.push(name);
    return { ninja: this.ninjas[id - 1] || null };
  }
}

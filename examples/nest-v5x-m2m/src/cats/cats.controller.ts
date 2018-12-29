import { Controller, Get, Post, Body, ValidationPipe, Param } from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';

@Controller()
export class CatsController {
  private cats: string[] = [];
  @Get('/')
  sayHello() {
    return `Hello From CatsController`;
  }

  @Get('/parent')
  whatIsTheNinjaId(@Param('ninjaId') ninjaId: string) {
    return `Hello From CatsController the ninjeId: ${ninjaId}`;
  }

  @Get('/:catId')
  getCat(@Param('catId') id: string) {
    const idx = parseInt(id, 10) || 0;
    return { cat: this.cats[idx - 1] || null };
  }

  // For testing Pipes
  @Post('/create')
  public testing(@Body(new ValidationPipe()) data: CreateCatDTO): string[] {
    this.cats.push(data.name);
    return this.cats;
  }
}

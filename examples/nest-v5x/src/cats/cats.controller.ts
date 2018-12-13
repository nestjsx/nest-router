import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateCatDTO } from './dto/create-cat.dto';

@Controller()
export class CatsController {
  private cats: string[] = [];
  @Get('/')
  sayHello() {
    return `Hello From CatsController`;
  }

  // For testing Pipes
  @Post('/create')
  public testing(@Body(new ValidationPipe()) data: CreateCatDTO): string[] {
    this.cats.push(data.name);
    return this.cats;
  }
}

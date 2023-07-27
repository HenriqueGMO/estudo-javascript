import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  getHello2(): object {
    return this.appService.getHello2();
  }

  @Get('hello3')
  getHello3(): number {
    return 3;
  }
  @Get('soma')
  getSoma(@Query('var1') var1: number, @Query('var2') var2: number): number {
    return this.appService.soma(var1, var2);
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Default endpoint returning a "Hello World" message
   * @returns {string} "Hello World"
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

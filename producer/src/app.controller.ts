import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getPong(): string {
    return "pong";
  }
}

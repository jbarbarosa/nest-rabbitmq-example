import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  Ping(): string {
    return "pong";
  }
}

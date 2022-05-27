import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { CreateUserService } from "../service/create-user.service";

@Controller("user")
export class CreateUserController {
  public constructor(private readonly service: CreateUserService) { }

  @Post()
  public create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }
}

import { Controller, Get, Param } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { UserFromIDPipe } from "../pipe/user-from-id.pipe";

@Controller("user")
export class FindUserController {
  @Get(':id')
  public findOne(@Param('id', UserFromIDPipe) user: UserEntity) {
    return { res: `I didn't have to do anything to find ${user.name}'s name!` };
  }
}

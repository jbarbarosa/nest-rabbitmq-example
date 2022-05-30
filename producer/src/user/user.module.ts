import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateUserController } from "./controller/create-user.controller";
import { FindUserController } from "./controller/find-user.controller";
import { UserEntity } from "./entity/user.entity";
import { CreateUserService } from "./service/create-user.service";
import { FindUserService } from "./service/find-user.service";

@Module({
  controllers: [CreateUserController, FindUserController],
  exports: [TypeOrmModule],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    CreateUserService,
    FindUserService,
  ],
})
export class UserModule { }


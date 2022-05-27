import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreateUserController } from "./controller/create-user.controller";
import { UserEntity } from "./entity/user.entity";
import { CreateUserService } from "./service/create-user.service";

@Module({
  controllers: [CreateUserController],
  exports: [],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [CreateUserService],
})
export class UserModule { }


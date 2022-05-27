import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../entity/user.entity";

@Injectable()
export class CreateUserService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  public create(createDto: CreateUserDto) {
    const user = this.userRepository.create(createDto);
    return this.userRepository.save(user);
  }
}

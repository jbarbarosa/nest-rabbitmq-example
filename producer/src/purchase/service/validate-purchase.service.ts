import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/user/entity/user.entity";
import { Repository } from "typeorm";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";

@Injectable()
export class ValidatePurchaseService {
  public constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  public async validate(dto: CreatePurchaseDto): Promise<boolean> {
    return (await this.validateUser(dto.user)) && this.validateMethod(dto.method);
  }

  private async validateUser(userId: number): Promise<boolean> {
    const user = await this.userRepository.findOne(userId);
    return !!user;
  }

  private validateMethod(method: string): boolean {
    return ["credit", "bitcoin"].includes(method);
  }
}

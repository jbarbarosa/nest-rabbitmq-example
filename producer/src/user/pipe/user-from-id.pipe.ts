import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { FindUserService } from "../service/find-user.service";

@Injectable()
export class UserFromIDPipe implements PipeTransform<any> {
  public constructor(private readonly service: FindUserService) { }

  public async transform(id: number, _: ArgumentMetadata): Promise<UserEntity> {
    const user = await this.service.findOne(id);
    if (user) return user;
    throw new HttpException(`User #${id} does not exist`, 404);
  }
}

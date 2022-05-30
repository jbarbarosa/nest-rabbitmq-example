import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { UserEntity } from "../entity/user.entity";
import { FindUserService } from "../service/find-user.service";

@Injectable()
export class UserFromIDPipe implements PipeTransform<any> {
  public constructor(private readonly service: FindUserService) { }

  public async transform(id: number, _: ArgumentMetadata): Promise<UserEntity> {
    return this.service.findOne(id);
  }
}

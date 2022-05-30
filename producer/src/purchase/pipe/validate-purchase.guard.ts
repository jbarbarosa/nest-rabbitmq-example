import { ArgumentMetadata, HttpException, Injectable, PipeTransform } from "@nestjs/common";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { ValidatePurchaseService } from "../service/create-purchase.service";

@Injectable()
export class ValidatePurchasePipe implements PipeTransform<any> {
  public constructor(private readonly service: ValidatePurchaseService) { }

  public async transform(dto: CreatePurchaseDto, _: ArgumentMetadata) {
    const isValid = await this.service.validate(dto)
    if (isValid) return dto;
    throw new HttpException("Pipe caught invalid purchase: user does not exist", 403);
  }
}

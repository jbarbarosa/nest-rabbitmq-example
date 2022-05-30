import { Injectable } from "@nestjs/common";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";

@Injectable()
export class RoutingKeyService {
  public getRoutingKey(dto: CreatePurchaseDto) {
    console.log('routing', dto.method)
    return dto.method;
  }
}

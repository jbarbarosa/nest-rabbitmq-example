import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Body, Controller, HttpException, Post, UseGuards } from "@nestjs/common";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { CreatePurchaseGuard } from "../guards/create-purchase.guard";
import { ValidatePurchaseService } from "../service/create-purchase.service";
import { RoutingKeyService } from "../service/routing-key.service";

@Controller("purchase")
export class CreatePurchaseController {
  public constructor(
    private readonly amqp: AmqpConnection,
    private readonly validator: ValidatePurchaseService,
    private readonly routing: RoutingKeyService,
  ) { }

  @UseGuards(CreatePurchaseGuard)
  @Post()
  public async create(@Body() dto: CreatePurchaseDto) {
    if (await this.validator.validate(dto))
      return this.amqp.publish("payments", this.routing.getRoutingKey(dto), dto);
    throw new HttpException("invalid purchase format", 403);
  }
}

import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreatePurchaseDto } from "../dto/create-purchase.dto";
import { CreatePurchaseGuard } from "../guards/create-purchase.guard";
import { ValidatePurchasePipe } from "../pipe/validate-purchase.guard";
import { RoutingKeyService } from "../service/routing-key.service";

@Controller("purchase")
export class CreatePurchaseController {
  public constructor(
    private readonly amqp: AmqpConnection,
    private readonly routing: RoutingKeyService,
  ) { }

  @UseGuards(CreatePurchaseGuard)
  @Post()
  public async create(@Body(ValidatePurchasePipe) dto: CreatePurchaseDto) {
    return this.amqp.publish("payments", this.routing.getRoutingKey(dto), dto);
  }
}

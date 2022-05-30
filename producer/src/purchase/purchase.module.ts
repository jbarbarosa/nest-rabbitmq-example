import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { CreatePurchaseController } from "./controller/create-purchase.controller";
import { RoutingKeyService } from "./service/routing-key.service";
import { ValidatePurchaseService } from "./service/validate-purchase.service";

@Module({
  controllers: [CreatePurchaseController],
  imports: [
    UserModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: "payments",
          type: "direct",
        },
      ],
      uri: "amqp://guest:guest@rabbitmq:5672"
    }),
    PurchaseModule,
  ],
  providers: [RoutingKeyService, ValidatePurchaseService]
})
export class PurchaseModule { }

import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { CreditController } from "./credit.controller";
import { GenerateConsumerIDService } from "./generate-consumer-id.service";

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'payments',
          type: 'direct',
        },
      ],
      uri: "amqp://guest:guest@rabbitmq:5672",
      enableControllerDiscovery: true,
    }),
    CreditModule,
  ],
  providers: [CreditController, GenerateConsumerIDService],
})
export class CreditModule { }

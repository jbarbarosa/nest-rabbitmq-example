import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { Module } from "@nestjs/common";
import { BitcoinController } from "./bitcoin.controller";
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
    BitcoinModule,
  ],
  providers: [BitcoinController, GenerateConsumerIDService],
})
export class BitcoinModule { }

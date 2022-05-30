import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";
import { BitcoinPurchaseDto } from "./bitcoin.dto";
import { GenerateConsumerIDService } from "./generate-consumer-id.service";

@Injectable()
export class BitcoinController {
  private id: string;

  public constructor(private readonly service: GenerateConsumerIDService) {
    this.id = this.service.getId();
  }

  @RabbitSubscribe({ exchange: "payments", routingKey: "bitcoin", queue: "bitcoin-payments" })
  public handle(message: BitcoinPurchaseDto) {
    console.log(`Bitcoin consumer ${this.id} handling message:`)
    console.log(message);
  }
}

import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";
import { CreditPurchaseDto } from "./credit.dto";
import { GenerateConsumerIDService } from "./generate-consumer-id.service";

@Injectable()
export class CreditController {
  private id: string;

  public constructor(private readonly service: GenerateConsumerIDService) {
    this.id = this.service.getId();
  }

  @RabbitSubscribe({ exchange: "payments", routingKey: "credit", queue: "credit-payments" })
  public handle(message: CreditPurchaseDto) {
    console.log(`Credit consumer ${this.id} handling message:`)
    console.log(message);
  }
}

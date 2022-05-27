import { Injectable } from "@nestjs/common";

@Injectable()
export class GenerateConsumerIDService {
  public getId(): string {
    return (Math.random() * 10).toFixed(0);
  }
}

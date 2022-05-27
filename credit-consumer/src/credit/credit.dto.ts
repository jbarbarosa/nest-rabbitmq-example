import { IsNumber, IsString } from "class-validator";

export class CreditPurchaseDto {
  @IsString()
  public readonly method: string;

  @IsNumber()
  public readonly user: number;

  @IsNumber()
  public readonly amount: number;
}


import { IsNumber, IsString } from "class-validator";

export class BitcoinPurchaseDto {
  @IsString()
  public readonly method: string;

  @IsNumber()
  public readonly user: number;

  @IsNumber()
  public readonly amount: number;
}


import { IsNumber, IsString } from "class-validator";

export class CreatePurchaseDto {
  @IsString()
  public readonly method: string;

  @IsNumber()
  public readonly user: number;

  @IsNumber()
  public readonly amount: number;
}


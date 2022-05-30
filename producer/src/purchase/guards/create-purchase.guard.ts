import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class CreatePurchaseGuard implements CanActivate {
  public canActivate(ctx: ExecutionContext): boolean {
    return ctx.switchToHttp().getRequest().headers.authorization === "Bearer secret";
  }
}

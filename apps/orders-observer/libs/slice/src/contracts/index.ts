import { IOrder } from "../interface";
import { Exclude, Expose } from "class-transformer";
import { IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export namespace OrdersContracts {
  export namespace getOrders {
    export const topic = "orders.getOrders.command";
    @Exclude()
    export class RequestDto {
      @ApiProperty({ required: false })
      @Expose()
      @IsString()
      tokenA?: string;

      @ApiProperty({ required: false })
      @Expose()
      @IsString()
      tokenB?: string;

      @ApiProperty({ required: false })
      @Expose()
      @IsString()
      user?: string;

      @ApiProperty({ required: false })
      @Expose()
      @IsBoolean()
      active?: boolean;
    }
    export class ResponseDto {
      orders: IOrder[];
    }
  }
  export namespace getMatchingOrder {
    export const topic = "orders.getMatchingOrder.command";
    @Exclude()
    export class RequestDto {
      @ApiProperty()
      @Expose()
      @IsString()
      tokenA: string;

      @ApiProperty()
      @Expose()
      @IsString()
      tokenB: string;

      @ApiProperty()
      @Expose()
      @IsString()
      amountA: string;

      @ApiProperty()
      @Expose()
      @IsString()
      amountB: string;
    }
    export class ResponseDto {
      ordersId: string[];
    }
  }
}

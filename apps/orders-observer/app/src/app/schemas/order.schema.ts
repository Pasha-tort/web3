import { Prop, Schema, SchemaFactory, ModelDefinition } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Document } from "mongoose";
import { IOrder, StatusOrderEnum } from "@task-test/orders-observer-slice";

@Schema({ versionKey: false })
export class Order extends Document implements IOrder {
  @Prop({ required: true, type: String })
  status: StatusOrderEnum;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  tokenA: string;

  @Prop({ required: true })
  tokenB: string;

  @Prop({ required: true })
  amountA: string;

  @Prop({ required: true })
  amountB: string;
}

export type OrderModel = Model<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
export const OrderFeature: ModelDefinition = {
  name: Order.name,
  schema: OrderSchema,
};

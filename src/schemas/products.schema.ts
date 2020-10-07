import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {ProductsInterface} from "../interfaces/products.interface";

@Schema()
export class Products extends Document implements ProductsInterface {

  @Prop()
  brand_name : string;

  @Prop()
  year : number;

  @Prop()
  color: string;

  @Prop()
  cepage : object;

  @Prop()
  label_img : string;

  @Prop()
  product_img : string;

  @Prop()
  buy_price_ht : number;

  @Prop()
  sell_price_ht : number;

  @Prop()
  quantity: number;

  @Prop()
  hold: number;

  @Prop()
  active : boolean;

}

export const ProductsSchema = SchemaFactory.createForClass(Products);

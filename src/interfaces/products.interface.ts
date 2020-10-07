import { Document } from 'mongoose';

export class ProductsInterface extends Document {
  readonly brand_name : string;
  readonly year : number;
  readonly color: string;
  readonly cepage : object;
  readonly label_img : string;
  readonly product_img : string;
  readonly buy_price_ht : number;
  readonly sell_price_ht : number;
  readonly quantity: number;
  readonly hold : number
  readonly active : boolean;
}

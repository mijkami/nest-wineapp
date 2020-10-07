import {ApiProperty} from "@nestjs/swagger";

export class CreateProductDto {

  @ApiProperty()
  readonly brand_name : string;

  @ApiProperty()
  readonly year : number;

  @ApiProperty()
  readonly color: string;

  @ApiProperty()
  readonly cepage : object;

  @ApiProperty()
  readonly label_img : string;

  @ApiProperty()
  readonly product_img : string;

  @ApiProperty()
  readonly buy_price_ht : number;

  @ApiProperty()
  readonly sell_price_ht : number;

  @ApiProperty()
  readonly quantity: number;

  @ApiProperty()
  readonly hold : number;

  @ApiProperty()
  readonly active : boolean;
}

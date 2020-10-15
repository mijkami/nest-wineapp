import {ApiProperty} from "@nestjs/swagger";

export class UpdateProductSlugDto {

  @ApiProperty()
  readonly product_img : string;
}

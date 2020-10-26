import {ApiProperty} from "@nestjs/swagger";

export class UpdateProductPictureDto {

  @ApiProperty()
  readonly product_img : string;
}

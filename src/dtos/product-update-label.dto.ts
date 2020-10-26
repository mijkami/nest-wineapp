import {ApiProperty} from "@nestjs/swagger";

export class UpdateProductLabelDto {

  @ApiProperty()
  readonly label_img : string;
}

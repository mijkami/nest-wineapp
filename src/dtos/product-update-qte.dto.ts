import {ApiProperty} from "@nestjs/swagger";

export class UpdateProductQteDto {

  @ApiProperty()
  readonly quantity: number;
}

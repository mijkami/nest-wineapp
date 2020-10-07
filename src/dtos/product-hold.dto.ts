import {ApiProperty} from "@nestjs/swagger";

export class HoldProductDto {

  @ApiProperty()
  readonly hold: number;
}

import {ApiProperty} from "@nestjs/swagger";

export class UpdateUserDto {

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly first_name: string;

  @ApiProperty()
  readonly last_name: string;

  @ApiProperty()
  readonly roles : string[];

  @ApiProperty()
  readonly last_seen_at: Date;

}

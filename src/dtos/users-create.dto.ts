import {ApiProperty} from "@nestjs/swagger";
import {UserRole} from "../enums";

export class CreateUserDto {

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  readonly first_name: string;

  @ApiProperty()
  readonly last_name: string;

  @ApiProperty()
  readonly roles : string[UserRole];

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly last_seen_at: Date;

}

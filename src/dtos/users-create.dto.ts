import {ApiProperty} from "@nestjs/swagger";
import {UserRole} from "../enums";

export class CreateUserDto {

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly first_name: string;

  @ApiProperty()
  readonly last_name: string;

  @ApiProperty()
  readonly roles : string[];

  @ApiProperty()
  readonly created_at: Date;

}

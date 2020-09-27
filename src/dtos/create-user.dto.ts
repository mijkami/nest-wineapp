import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {UserRole} from "../enums";
import {IsNotEmpty} from "class-validator";
import {Unique} from "typeorm";

export class CreateUserDto {

  @ApiModelProperty()
  @IsNotEmpty()
  readonly username: string;

  @ApiModelProperty({enum: [UserRole]})
  @IsNotEmpty()
  readonly role: UserRole;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly password: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly lastName: string;
}

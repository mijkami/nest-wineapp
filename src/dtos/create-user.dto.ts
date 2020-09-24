import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import {UserRole} from "../enums";
import {IsNotEmpty} from "class-validator";

export class CreateUserDto {
  @ApiModelProperty()
  readonly _id: number;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly name: string;

  @ApiModelProperty({enum: [UserRole]})
  @IsNotEmpty()
  readonly role: UserRole;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly pass: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly lastName: string;
}

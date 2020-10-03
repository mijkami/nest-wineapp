import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

import { UsersInterface } from '../interfaces/users.interface';
import {ApiProperty} from "@nestjs/swagger";

// here implement interface required
@Schema()
export class Users extends Document implements UsersInterface {
  @Prop( { unique: true, autoIndex: true })
  username: string;

  @Prop()
  password: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  roles : string[];

  @Prop({ default: Date.now })
  created_at: Date

}

export const UsersSchema = SchemaFactory.createForClass(Users);

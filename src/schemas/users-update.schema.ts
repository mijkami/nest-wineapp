import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

import { UsersInterface } from '../interfaces/users.interface';
import {ApiProperty} from "@nestjs/swagger";
import {UsersUpdateInterface} from "../interfaces/users-update.interface";

// here implement interface required
@Schema()
export class UsersUpdate extends Document implements UsersUpdateInterface {

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  roles : string[];

  @Prop( { default: Date.now })
  last_seen_at: Date;

}

export const UsersUpdateSchema = SchemaFactory.createForClass(UsersUpdate);

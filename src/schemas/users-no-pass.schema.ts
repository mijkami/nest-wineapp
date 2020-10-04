import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {UserProfileInterface} from "../interfaces/user-profile.interface";

// here implement interface required
@Schema()
export class UsersNoPass extends Document implements UserProfileInterface {
  @Prop( { unique: true, autoIndex: true })
  username: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  roles : string[];

  @Prop({ default: Date.now })
  created_at: Date

  @Prop( { default: Date.now })
  last_seen_at: Date;

}

export const UsersNoPassSchema = SchemaFactory.createForClass(UsersNoPass);

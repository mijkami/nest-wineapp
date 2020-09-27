import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { UsersInterface } from '../interfaces/users.interface';

// here implement interface required
@Schema()
export class Users extends Document implements UsersInterface {
  @Prop()
  username: string;

  @Prop()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Users, UsersSchema } from '../schemas/users.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {UsersNoPass, UsersNoPassSchema} from "../schemas/users-no-pass.schema";


@Module({
  imports: [
    // here use variable as it avoids mistyping errors
    MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}]),
    MongooseModule.forFeature([{name: UsersNoPass.name, schema: UsersNoPassSchema}])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

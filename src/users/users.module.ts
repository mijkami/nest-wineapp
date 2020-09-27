import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Users, UsersSchema } from '../schemas/users.schema';
import { UsersService } from './users.service';


@Module({
  imports: [
    // here use variable as it avoids mistyping errors
    MongooseModule.forFeature([{name: Users.name, schema: UsersSchema}])
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

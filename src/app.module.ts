import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
// require('dotenv').config();



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://WineApp:wineapp@wineapp.cjilz.mongodb.net/test?authSource=admin&replicaSet=atlas-awua6g-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'), 
    AuthModule, 
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
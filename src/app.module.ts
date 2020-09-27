import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import {AuthService} from "./auth/auth.service";



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://WineApp:wineapp@wineapp.cjilz.mongodb.net/test?authSource=admin&replicaSet=atlas-awua6g-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://WineApp:wineapp@wineapp.cjilz.mongodb.net/WineApp?authSource=admin&replicaSet=atlas-awua6g-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'),
    AuthModule,
    UsersModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService]})
export class AppModule {}

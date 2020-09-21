import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { TodoModule } from './todo/todo.module';
import {TodoEntity} from "./todo/todo.entity";
import {DatabaseConnectionService} from "./database/database-connection/database-connection.service";


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

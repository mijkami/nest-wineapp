import { Module } from '@nestjs/common';
import { WinesService } from './wines.service';
import { WinesController } from './wines.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Wine} from "./wine.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Wine])],
  providers: [WinesService],
  controllers: [WinesController]
})
export class WinesModule {}

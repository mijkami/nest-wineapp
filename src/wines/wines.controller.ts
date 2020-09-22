import {Body, Controller, Get, Post} from '@nestjs/common';
import {WinesService} from "./wines.service";
import {Wine} from "./wine.entity";

@Controller('wines')
export class WinesController {
  constructor(private winesService: WinesService) {}

  @Get()
  getAllWines() {
    return this.winesService.findAll();
  }

  @Post("/insert")
  createWine(@Body() wine: Wine) {
    return this.winesService.insertOne(wine);
  }
}

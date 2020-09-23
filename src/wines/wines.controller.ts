import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import {WinesService} from "./wines.service";
import CreateWineDto from "../dto/create-wine.dto";

@Controller('wines')
export class WinesController {
  constructor(private winesService: WinesService) {}

  @Get()
  getAllWines() {
    return this.winesService.findAll();
  }

  @Post()
  createWine(@Body() wine: CreateWineDto) {
    return this.winesService.insertOne(wine);
  }

  @Put()
  updateWine(@Body() wine: CreateWineDto) {
    return this.winesService.updateOne(wine);
  }
}

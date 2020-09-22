import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Wine} from "./wine.entity";

@Injectable()
export class WinesService {
  constructor(
    @InjectRepository(Wine)
    private wineRepository: Repository<Wine>,
  ) {}

  findAll(): Promise<Wine[]> {
    return this.wineRepository.find();
  }

  findOne(id: string): Promise<Wine> {
    return this.wineRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.wineRepository.delete(id);
  }

  async insertOne(wine: Wine): Promise<Wine> {
    return await this.wineRepository.save(wine);
  }
}

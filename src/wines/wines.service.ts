import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {WineEntity} from "./wine.entity";
import CreateWineDto from "../dto/create-wine.dto";

@Injectable()
export class WinesService {
  constructor(
    @InjectRepository(WineEntity)
    private wineRepository: Repository<WineEntity>,
  ) {}

  findAll(): Promise<WineEntity[]> {
    return this.wineRepository.find();
  }

  findOne(id: string): Promise<WineEntity> {
    return this.wineRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.wineRepository.delete(id);
  }

  async updateOne(wineDetails: CreateWineDto): Promise<WineEntity> {
    const wineEntity: WineEntity = WineEntity.create();
    const {name} = wineDetails;
    wineEntity.wine_name = name.toLowerCase();

    const wineElm = await WineEntity.findOne({
      wine_name: name.toLowerCase()
    });
    await WineEntity.save(wineEntity);
    return wineEntity;
  }

  async insertOne(wineDetails: CreateWineDto): Promise<WineEntity> {
    const wineEntity: WineEntity = WineEntity.create();
    const {name} = wineDetails;
    wineEntity.wine_name = name.toLowerCase();

    const wineElm = await WineEntity.findOne({
      wine_name: name.toLowerCase()
    });

    if (wineElm == undefined) {
      await WineEntity.save(wineEntity);
      return wineEntity;
    }
    throw new HttpException({
      status: HttpStatus.CONFLICT,
      error: "Element already exists in the database"
    }, HttpStatus.CONFLICT);
  }
}

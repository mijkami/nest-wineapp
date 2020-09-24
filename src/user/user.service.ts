import { Injectable } from '@nestjs/common';
import {IUser} from "../interfaces/user.interface";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {CreateUserDto} from "../dtos/create-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll():Promise<IUser[]> {
    return await this.userModel.find().exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersInterface } from 'src/interfaces/users.interface';
import { Users } from 'src/schemas/users.schema';
import {CreateUserDto} from "../dtos/users-create.dto";
import * as bcrypt from "bcrypt";
import {UpdateUserDto} from "../dtos/users-update.dto";

@Injectable()
export class UsersService {
  // here I'm not 100% sure but I think it's easier to explicitly type
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) {}

  async findOne(username: string): Promise<UsersInterface | undefined> {
    // Logger.debug(username, UsersService.name);
    // here use .lean() to return a plain JavaScript object instead of a mongoose object
    // see: https://stackoverflow.com/questions/60525544/how-to-serialize-a-nest-js-response-with-class-transformer-while-getting-data-wi
    const user = await this.usersModel.findOne({username}).lean();
    // Logger.debug(user, UsersService.name);
    return user;
  }

  async addUser(user: CreateUserDto): Promise<UsersInterface> {
    user.password = await bcrypt.hash(user.password, 10);
    const createdUser = new this.usersModel(user);
    return createdUser.save();
  }

  async getAllUsers() : Promise<UsersInterface[]> {
    return await this.usersModel.find().exec();
  }

  async getOneUser(username: string) : Promise<UsersInterface> {
      return this.usersModel.findOne({username: username}).exec();
  }

  async getUserById(id: string) : Promise<UsersInterface> {
    return this.usersModel.findById(id).exec();
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) : Promise<UsersInterface>  {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  async removeUser(id: string) : Promise<UsersInterface> {
    return this.usersModel.findByIdAndDelete(id);
  }
}

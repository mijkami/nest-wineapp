import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersInterface } from 'src/interfaces/users.interface';
import { Users } from 'src/schemas/users.schema';
import {CreateUserDto} from "../dtos/users-create.dto";
import * as bcrypt from "bcrypt";
import {UserProfileInterface} from "../interfaces/user-profile.interface";
import {UsersNoPass} from "../schemas/users-no-pass.schema";

@Injectable()
export class UsersService {
  // here I'm not 100% sure but I think it's easier to explicitly type
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>,
              @InjectModel(UsersNoPass.name) private readonly usersModelNoPass: Model<UsersNoPass>) {}

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

  async getAllUsers() : Promise<UserProfileInterface[]> {
    return await this.usersModel.find().exec();
  }

  async getOneUser(last_name: string) : Promise<UserProfileInterface> {
    return this.usersModel.findOne({last_name: last_name}).exec();
  }

  async getUserById(id: string) : Promise<UserProfileInterface> {
    return this.usersModel.findById(id).exec();
  }
}


import { Injectable } from '@nestjs/common';
import {UsersInterface} from "../interfaces/users.interface";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";


@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private usersModel: Model<UsersInterface>) {
  }

  async findOne(username: string): Promise<UsersInterface | undefined> {
    console.log(username);
    return this.usersModel.findOne({username: username});
  }
}

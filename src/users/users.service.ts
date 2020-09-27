import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersInterface } from 'src/interfaces/users.interface';
import { Users } from 'src/schemas/users.schema';



@Injectable()
export class UsersService {
  // here I'm not 100% sure but I think it's easier to explicitly type
  constructor(@InjectModel(Users.name) private readonly usersModel: Model<Users>) {}

  async findOne(username: string): Promise<UsersInterface | undefined> {
    Logger.debug(username, UsersService.name)
    // here use .lean() to return a plain JavaScript object instead of a mongoose object
    // see: https://stackoverflow.com/questions/60525544/how-to-serialize-a-nest-js-response-with-class-transformer-while-getting-data-wi
    const user = await this.usersModel.findOne({username}).lean();
    Logger.debug(user, UsersService.name)
    return user
  }
}

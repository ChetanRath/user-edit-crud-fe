import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import CustomHttpException from 'src/utils/CustomHttpException';

@Injectable()
export class UserService {
  private readonly logger = new Logger(User.name);
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async getUsers() {
    this.logger.log(`Retrieve all Users`);
    const users = await this.userModel.find();
    return users;
  }

  async getUser(id: string) {
    this.logger.log(`Retrieving self information`);
    try {
      const users = await this.userModel
        .findOne({
          _id: id,
        })
        .lean();
      return users;
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error  getting data ${e?.message}`,
      });
    }
  }

  async createUser(userData: CreateUserDto) {
    this.logger.log(`Creating User`);
    await this.userModel.create({
      ...userData,
    });
    return {};
  }

  async updateUser(id: string, updatedData: UpdateUserDto) {
    this.logger.log(`Updating user details`);
    try {
      await this.userModel.findOneAndUpdate(
        {
          _id: id,
        },
        { ...updatedData },
        { upsert: true },
      );
      return {};
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: `Error  getting data ${e?.message}`,
      });
    }
  }

  async findOne(username: string): Promise<UserDocument> {
    const user = await this.userModel
      .findOne({
        email: username,
      })
      .lean();
    return user;
  }
}

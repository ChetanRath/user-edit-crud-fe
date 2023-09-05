import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDocument } from 'src/schemas/user.schema';
import CustomHttpException from 'src/utils/CustomHttpException';
import { User } from 'src/utils/req-logistics';
import { AuthUserContent } from 'src/utils/common.interface';
import { JoiValidationPipe } from 'src/utils/joiValidation.pipe';
import { CreateUserDto } from './users.dto';
import { createUserValidation } from './user.joi';

@Controller({ path: 'users', version: ['v1'] })
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get All the valid users' })
  async getUsers(): Promise<UserDocument[]> {
    try {
      return await this.userService.getUsers();
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Get('/me')
  @ApiOperation({ summary: 'Get my detail' })
  async getUser(@User() user: AuthUserContent): Promise<UserDocument> {
    try {
      return await this.userService.getUser(user.userId);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create User with valid information' })
  @ApiBody({ type: CreateUserDto })
  @UsePipes(new JoiValidationPipe(createUserValidation))
  async createUser(@Body() userData: CreateUserDto) {
    try {
      console.log('55555555555555555', userData);
      return this.userService.createUser(userData);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }
}

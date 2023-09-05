import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDocument } from 'src/schemas/user.schema';
import CustomHttpException from 'src/utils/CustomHttpException';
import { UserDetail } from 'src/utils/common.interface';
import { JoiValidationPipe } from 'src/utils/joiValidation.pipe';
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { createUserValidation, updateUserValidation } from './user.joi';

@Controller({ path: 'users', version: ['v1'] })
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get the operating user' })
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

  @Get('/me/:userId')
  @ApiOperation({ summary: 'Get my detail' })
  async getUser(@Param() user: UserDetail): Promise<UserDocument> {
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
      return this.userService.createUser(userData);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }

  @Put('/:userId')
  @ApiOperation({ summary: 'Update details' })
  @ApiBody({ type: UpdateUserDto })
  async updateUser(
    @Param() user: UserDetail,
    @Body(new JoiValidationPipe(updateUserValidation))
    updatedData: UpdateUserDto,
  ) {
    try {
      return await this.userService.updateUser(user.userId, updatedData);
    } catch (e) {
      throw new CustomHttpException({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e?.message,
      });
    }
  }
}

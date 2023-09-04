import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDocument } from 'src/schemas/user.schema';
import CustomHttpException from 'src/utils/CustomHttpException';
import { User } from 'src/utils/req-logistics';
import { AuthUserContent } from 'src/utils/common.interface';

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
  @ApiOperation({ summary: 'Get my details' })
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
}

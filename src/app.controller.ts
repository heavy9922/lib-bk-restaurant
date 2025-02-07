import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from '@app/db-restaurant';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() body: { email: string; password: string }) {
    return this.usersService.createUser(body.email, body.password);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
}

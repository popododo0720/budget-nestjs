import { UserResponseDto } from './DTO/user-response.dto';
import { UserService } from './user.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './Entity/user.entity';
import { CreateUserDto } from './DTO/user-create.dto';

@Controller('/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/findAll')
    async getAll(): Promise<UserResponseDto[]> {
        return this.userService.findAll();
    }

    @Get('/findOne/:id')
    async getOne(@Param('id') id: number): Promise<UserResponseDto> {
        return this.userService.findOne(id);
    }

    @Post('/createUser')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
    }
}

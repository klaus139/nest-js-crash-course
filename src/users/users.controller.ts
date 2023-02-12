import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userservice: UsersService){}

    @Get()
    getUsers() {
        return this.userservice.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userdata:CreateUserType){
        console.log(userdata);
        return this.userservice.createUser(userdata);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
       const user =  this.userservice.fetchUserById(id);
       if(!user) throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
       return user;
    }
    
}

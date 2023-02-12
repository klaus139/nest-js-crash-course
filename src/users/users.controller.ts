import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        console.log(sortDesc);
        return [
            {
                username: 'Anson', email: 'anson@email.com', password: '12345'
            }
        ]
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userdata:CreateUserDto){
        console.log(userdata);
        return {};
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id);
        return { id };
    }
    
}

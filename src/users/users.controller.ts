import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get('/all')
    getAllUsers(){
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() body:any){
        return {
            message : 'User Created',
            data : body
        }
    }
}

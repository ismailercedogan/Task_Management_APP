import { Controller,Post, Body, UnauthorizedException,NotFoundException, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './dto/login.dto';
import { ShowUserDto } from './dto/show.user.dto';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/register')
    async register(@Body() loginDto: LoginDto) {
        return this.usersService.createUser(loginDto);
    }
    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
        const user = await this.usersService.validateUser(loginDto.username, loginDto.password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return this.usersService.login(user);
    }
    
    @Get()
    async getAllUsers(): Promise<ShowUserDto[]> {
        return this.usersService.getAllUsers();
    }

    @Get('getbyusername')
    async getbyusername(@Query() showUserDto: ShowUserDto) {
        const user = await this.usersService.getbyusername(showUserDto);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}


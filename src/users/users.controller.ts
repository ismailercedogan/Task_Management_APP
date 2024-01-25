import { Controller,Post, Body, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDto } from './dto/login.dto';

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
}

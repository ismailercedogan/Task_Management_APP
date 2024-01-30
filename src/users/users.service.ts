import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from './user.interface';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService
    ) {}

    async createUser (loginDto: LoginDto): Promise<User> {
        const{username,email, password} = loginDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new this.userModel({username, email, password: hashedPassword});
        return newUser.save();
    }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userModel.findOne({username});
        if(user && await bcrypt.compare(password, user.password)) {
            const {password, ...result} = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user._id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from './user.interface';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async createUser (loginDto: LoginDto): Promise<User> {
        const{username,email, password} = loginDto;
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new this.userModel({username, email, password: hashedPassword});
        return newUser.save();
    }
}

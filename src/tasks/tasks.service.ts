import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.interface';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

}

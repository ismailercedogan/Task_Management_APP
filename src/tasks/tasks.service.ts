import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.interface';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

    async create (createTaskDto: CreateTaskDto): Promise<Task> {
        const createdTask = new this.taskModel(createTaskDto);
        return createdTask.save();
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

    async update(id: string, UpdateTaskDto: UpdateTaskDto): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(id, UpdateTaskDto, {new: true}).exec();
    }

    async delete(id: string): Promise<any> {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
}

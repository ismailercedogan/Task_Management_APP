import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:27017/task_management'), TasksModule, UsersModule,],
  controllers: [AppController, TasksController],
  providers: [AppService],


})
export class AppModule {}

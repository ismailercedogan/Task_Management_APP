import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://127.0.0.1:27017/task_management'), TasksModule, UsersModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}

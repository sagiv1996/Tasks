import { Controller, Get, Post, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() body: CreateTask) {
    return this.tasksService.createTask(body);
  }

  @Patch(':id')
  UpdateTask(@Param() params, @Body() body: UpdateTask) {
    return this.tasksService.updateTask(params.id, body);
  }
}

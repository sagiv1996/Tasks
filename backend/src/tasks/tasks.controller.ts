import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';
import { GetTasks } from 'src/dto/tasks/getTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query() query: GetTasks) {
    return this.tasksService.getTasks(query);
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

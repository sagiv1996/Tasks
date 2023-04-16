import { Injectable } from '@nestjs/common';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { GetTasks } from 'src/dto/tasks/getTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';
import { v4 as uuidv4 } from 'uuid';

const tasks: Array<task> = [];

@Injectable()
export class TasksService {
  getTasks(query: GetTasks) {
    if (query.isCompleted === undefined)
      return tasks.slice(query.skip, query.skip + query.limit);
    return tasks
      .filter((task) => task.isCompleted === query.isCompleted)
      .slice(query.skip, query.skip + query.limit);
  }

  createTask(task: CreateTask) {
    const id = uuidv4();
    const newTask: task = {
      id,
      title: task.title,
      isCompleted: false,
      createdAt: task.createdAt,
    };
    tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, updateTask: UpdateTask) {
    const taskIndex = tasks.findIndex((task) => id === task.id);
    if (taskIndex >= 0) {
      tasks[taskIndex].title = updateTask.title || tasks[taskIndex].title;
      tasks[taskIndex].isCompleted =
        updateTask.isCompleted !== undefined
          ? updateTask.isCompleted
          : tasks[taskIndex].isCompleted;
      return tasks[taskIndex];
    }
  }
}

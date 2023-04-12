import { Injectable } from '@nestjs/common';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';
import { v4 as uuidv4 } from 'uuid';

const tasks: Array<task> = [];

@Injectable()
export class TasksService {
  getTasks() {
    return tasks;
  }

  createTask(task: CreateTask) {
    const id = uuidv4();
    const newTask: task = {
      id,
      title: task.title,
      createdAt: new Date(),
      isCompleted: false,
    };
    tasks.push(newTask);
    return newTask;
  }

  updateTask(updateTask: UpdateTask) {
    const taskIndex = tasks.findIndex((task) => updateTask.id === task.id);
    console.log(updateTask.isCompleted);
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

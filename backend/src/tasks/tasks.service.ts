import { Injectable } from '@nestjs/common';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';

const tasks: Array<task> = [
  { id: '1', title: 'Learn english' },
  { id: '2', title: 'Eat food' },
];
@Injectable()
export class TasksService {
  private createId() {
    const id = (Math.random() * 100).toFixed(0);
    if (tasks.findIndex((task) => task.id === id) >= 0) return this.createId();
    return id;
  }

  getTasks() {
    return tasks;
  }

  createTask(task: CreateTask) {
    const id = this.createId();
    const newTask: task = { id, title: task.title };
    tasks.push(newTask);
    return newTask;
  }

  updateTask(task: UpdateTask) {
    const taskIndex = tasks.findIndex((task) => task.id === task.id);
    if (taskIndex >= 0) {
      tasks[taskIndex].title = task.title;
      return tasks[taskIndex];
    }
  }
}

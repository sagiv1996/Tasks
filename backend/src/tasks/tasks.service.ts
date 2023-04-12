import { Injectable } from '@nestjs/common';
import { CreateTask } from 'src/dto/tasks/createTask.dto';
import { UpdateTask } from 'src/dto/tasks/updateTask.dto';

const tasks: Array<task> = [
  {
    id: '1',
    title: 'Learn english',
    createdAt: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Eat food',
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 5)),
    isCompleted: false,
  },
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
    if (taskIndex >= 0) {
      tasks[taskIndex].title = updateTask.title || tasks[taskIndex].title;
      tasks[taskIndex].isCompleted =
        updateTask.isCompleted || tasks[taskIndex].isCompleted;
      return tasks[taskIndex];
    }
  }
}

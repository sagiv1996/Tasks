import { Injectable } from '@nestjs/common';

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

  createTask(title: string) {
    const id = this.createId();
    const task: task = { id, title };
    tasks.push(task);
    return task;
  }
}

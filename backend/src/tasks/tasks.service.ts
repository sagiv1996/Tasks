import { Injectable } from '@nestjs/common';

const tasks = [
  { id: 1, title: 'Learn english' },
  { id: 2, title: 'Eat food' },
];
@Injectable()
export class TasksService {
  getTasks() {
    return tasks;
  }
}

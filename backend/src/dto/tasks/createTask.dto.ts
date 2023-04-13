import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateTask {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  createdAt: string = new Date().toISOString();
}

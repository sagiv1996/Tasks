import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateTask {
  @IsString()
  title: string = '';

  @IsBoolean()
  isCompleted: boolean = false;
}

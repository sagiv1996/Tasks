import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateTask {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  title: string = '';

  @IsBoolean()
  isCompleted: boolean = false;
}

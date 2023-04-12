import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateTask {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isCompleted: boolean = false;
}

import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateTask {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

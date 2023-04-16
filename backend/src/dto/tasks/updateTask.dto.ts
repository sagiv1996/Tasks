import { Transform } from 'class-transformer';
import { IsString, IsBoolean, isBoolean } from 'class-validator';

export class UpdateTask {
  @IsString()
  title: string = '';

  @Transform(
    ({ value }) =>
      (!isBoolean(value) && value.toLowerCase() === 'true') ||
      value === true ||
      value === 1,
  )
  @IsBoolean()
  isCompleted: boolean = false;
}

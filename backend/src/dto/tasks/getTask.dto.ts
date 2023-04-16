import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class GetTasks {
  @Transform(
    ({ value }) =>
      value.toLowerCase() === 'true' || value === true || value === 1,
  )
  @IsBoolean()
  @IsOptional()
  isCompleted: boolean;


  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  limit: number = 100;

  
  @Transform(({ value }) => Number.parseInt(value))
  @IsNumber()
  @IsOptional()
  skip: number = 0;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsNumber()
  readonly year: number;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateHeroDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  edad: number;

  @ApiProperty()
  @IsString()
  desription: string;

  @ApiProperty()
  @IsString()
  image: string;
}

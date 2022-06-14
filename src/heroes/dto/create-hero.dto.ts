import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateHeroDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsDate()
  birthday: Date;

  @ApiProperty()
  @IsString()
  placeBirth: string;

  @ApiProperty()
  @IsString()
  height: string;

  @ApiProperty()
  @IsString()
  spouce: string;

  @ApiProperty()
  @IsString()
  children: string;

  @ApiProperty()
  @IsString()
  parents: string;

  @ApiProperty()
  @IsString()
  observations: string;

  @ApiProperty()
  @IsString()
  image: string;
}

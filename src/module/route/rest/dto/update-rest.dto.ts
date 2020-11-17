import { PartialType } from '@nestjs/mapped-types';
import { CreateRestDto } from './create-rest.dto';
import { IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateRestDto extends PartialType(CreateRestDto) {
	@Transform(parseInt)
	@IsInt()
	age: number;
}

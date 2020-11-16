import { PartialType } from '@nestjs/mapped-types';
import { CreateRestDto } from './create-rest.dto';
import { IsNumber } from 'class-validator';

export class UpdateRestDto extends PartialType(CreateRestDto) {
	@IsNumber()
	age: number;
}

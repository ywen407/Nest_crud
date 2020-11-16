import { IsString, IsNumber } from 'class-validator';
export class CreateRestDto {
	@IsString()
	name: string;
	@IsNumber()
	age: number;
}

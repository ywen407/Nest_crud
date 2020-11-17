import { IsString, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateRestDto {
	@IsString()
	name: string;
	@Transform(parseInt)
	@IsInt()
	age: number;
}

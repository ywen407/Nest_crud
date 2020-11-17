import {
	Controller,
	Get,
	Post,
	Body,
	Put,
	Param,
	Delete,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { RestService } from './rest.service';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';

@Controller('rest')
export class RestController {
	constructor(private readonly restService: RestService) {}

	@Post()
	async create(@Body() createRestDto: CreateRestDto) {
		return await this.restService.create(createRestDto);
	}

	@Get()
	findAll() {
		return this.restService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		let findUser = this.restService.findOne(+id);
		if (!findUser) {
			return findUser;
		} else {
			throw new HttpException(
				{ message: 'invalid user' },
				HttpStatus.BAD_REQUEST,
			);
		}
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateRestDto: UpdateRestDto) {
		return this.restService.update(+id, updateRestDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.restService.remove(+id);
	}
}

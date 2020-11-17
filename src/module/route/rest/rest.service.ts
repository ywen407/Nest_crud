import { Injectable, Inject } from '@nestjs/common';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';
import { Repository } from 'typeorm';
import { Rest } from '../../../model/rest/rest.entity';

@Injectable()
export class RestService {
	constructor(
		@Inject('REST_REPOSITORY')
		private restRepository: Repository<Rest>,
	) {}
	async create(createRestDto: CreateRestDto): Promise<Rest> {
		return await this.restRepository.save(createRestDto);
	}

	async findAll(): Promise<Rest[]> {
		return await this.restRepository.find();
	}

	async findOne(id: number): Promise<Rest> {
		return await this.restRepository.findOne({ id: id });
	}

	async update(id: number, updateRestDto: UpdateRestDto): Promise<any> {
		return await this.restRepository.update(id, updateRestDto);
	}

	async remove(id: number): Promise<any> {
		return await this.restRepository.delete(id);
	}
}

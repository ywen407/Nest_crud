import { Connection, Repository } from 'typeorm';
import { Rest } from '../../../model/rest/rest.entity';

export const restProviders = [
	{
		provide: 'REST_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Rest),
		inject: ['DB_CONNECTION'],
	},
];

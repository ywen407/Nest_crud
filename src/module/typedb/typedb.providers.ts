import { createConnection } from 'typeorm';

//separated custom provider
//사용 할때 @Inject('DB_CONNECTION')을 사용하여 주입.
export const typedbProviders = [
	{
		provide: 'DB_CONNECTION',
		useFactory: async () =>
			await createConnection({
				type: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'root',
				password: 'hello_world',
				database: 'signal',
				entities: [__dirname + '../../../**/*.entity!(*.d){.ts,.js}'],
				migrations: [__dirname + '../../migrations/**/*.ts'],
				migrationsRun: true,
				synchronize: true,
			}),
	},
];

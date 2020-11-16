import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class hello1605518698575 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		queryRunner.createTable(
			new Table({
				name: 'rest',
				columns: [
					{
						name: 'id',
						type: 'int4',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment',
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'age',
						type: 'numeric',
						isNullable: true,
					},
				],
			}),
			false,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}

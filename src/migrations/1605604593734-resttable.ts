import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class resttable1605604593734 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'rest',
				columns: [
					{
						name: 'id',
						type: 'int',
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
						type: 'int',
						isNullable: true,
					},
				],
			}),
			false,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}

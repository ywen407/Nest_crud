import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rest {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar', default: 'none' })
	name: string;

	@Column({ type: 'int', default: 0 })
	age: number;
}

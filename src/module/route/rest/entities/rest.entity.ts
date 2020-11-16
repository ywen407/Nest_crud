import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rest {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'varchar' })
	name: string;

	@Column('int')
	age: number;
}

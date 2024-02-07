import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('auth')
export class users extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'this is primary key'
    })

    id: number;

    @Column({
        type: 'varchar'
    })

    name: string;

    @Column({
        type: 'varchar'
    })

    email: string;

    @Column({ default: true })
    isActive: boolean;
}
import { users } from "src/auth/auth.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('product')
export class Products extends BaseEntity{
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

    Details: string;

    @Column({
        type: 'integer'
    })

    Price: Number;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => users, (user) => user.product)

    user: users
}
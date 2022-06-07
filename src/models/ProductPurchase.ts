//Id products (many to many relation) purchaseDate total
import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne, OneToMany, BaseEntity, JoinColumn } from 'typeorm';
import {Item } from './Item';
import { User } from './User';

@Entity()
export class ProductPurchase extends BaseEntity {
    
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        purchaseDate: Date;
    
        @Column()
        total: number;

        @OneToMany(type => Item, item => item.purchase)
        items: Item[];

        @Column()
        userId: number;
        
        @ManyToOne(type => User, user => user.purchases)
        @JoinColumn({ name: 'userId' })
        user: User;

        
    }

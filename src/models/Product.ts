//id name category price quantity
import { Entity, PrimaryGeneratedColumn, Column,  OneToMany, BaseEntity} from 'typeorm';
import {Item} from './Item';
@Entity()
export class Product extends BaseEntity {
    
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column()
        name: string;
    
        @Column()
        category: string;
    
        @Column()
        price: number;
    
        @Column()
        quantity: number;

        @OneToMany(type => Item, item => item.product)
        items: Item[];
        
    }
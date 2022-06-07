import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { ProductPurchase } from "./ProductPurchase";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    money: number;

    @Column()
    password: string;

    @OneToMany(type => ProductPurchase, productPurchase => productPurchase.user)
    purchases: number;
    
  
}

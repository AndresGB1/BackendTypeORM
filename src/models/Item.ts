//id,Product,ProductPurchase

import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn,BaseEntity } from 'typeorm';
import { Product } from './Product';
import { ProductPurchase } from './ProductPurchase';

@Entity()
export class Item extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
   
    @Column()
    purchaseId: string;

    @ManyToOne(type => ProductPurchase, purchase => purchase.items)
    @JoinColumn({ name: 'purchaseId' })
    purchase: ProductPurchase;

    @Column()
    productId: string;
    
    @ManyToOne(type => Product, product => product.items)
    @JoinColumn({ name: 'productId' })
    product: Product;
    

}
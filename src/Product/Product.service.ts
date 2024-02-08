import { Injectable} from "@nestjs/common";
import { Productdto } from "./Product.dto";
import { ProductRepository } from "./Product.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./Product.entity";
import { users } from "src/auth/auth.entity";


@Injectable(
)
export class ProductService{

constructor(@InjectRepository(ProductRepository) private productrepository: ProductRepository ){}

async CreateNewProduct(product: Productdto, user: users): Promise<Products>{
    return await this.productrepository.save(product)
}
}
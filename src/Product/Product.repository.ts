import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Products } from "./Product.entity";

@Injectable()
export class ProductRepository extends Repository<Products> {
    constructor(private datasource: DataSource){
        super(Products, datasource.createEntityManager());
    }
}
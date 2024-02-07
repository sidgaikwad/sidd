import { DataSource, EntityRepository, Repository } from "typeorm";
import { users } from "./auth.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class Authresopitory extends Repository<users> {
    constructor(private datasource: DataSource){
        super(users, datasource.createEntityManager());
    }
}
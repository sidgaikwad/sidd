import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Authresopitory } from "./auth.repository";
import { authdto } from "./auth.dto";

@Injectable({})
export class AuthService {

    constructor(@InjectRepository(Authresopitory) private authrepository: Authresopitory){

    }



    login() {
        return {msg: 'hii from login'};
    }

    signup(){
        return {msg: "hello"};
    }

    async createNewAuth(auth: authdto){
        return await this.authrepository.save(auth)
    }
}

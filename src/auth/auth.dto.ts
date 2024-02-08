import { IsNotEmpty, IsString, Length, isNotEmpty, isString } from "class-validator"
import { OneToMany } from "typeorm";
import { users } from "./auth.entity";

export class authdto {
    @IsNotEmpty({message: "there should be a username"})
    @IsString()
    @Length(2, 255)
    name: string;

    @IsNotEmpty({message: "there should be a Email"})
    @IsString()
    @Length(2, 255)
    email: string;
}
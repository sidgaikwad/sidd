import { IsNotEmpty, IsString, Length, isNotEmpty, isString } from "class-validator"

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
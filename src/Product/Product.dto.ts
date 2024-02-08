import { IsNotEmpty, IsNumber, IsString, Length, isNotEmpty, isString } from "class-validator"

export class Productdto {
    @IsNotEmpty({message: "there should be a username"})
    @IsString()
    @Length(2, 255)
    name: string;

    @IsNotEmpty({message: "there should be a Description"})
    @IsString()
    @Length(2, 255)
    Details: string;

    @IsNotEmpty({message: "there should be a vaild price"})
    Price: Number;

    @IsNotEmpty()
    userID: number; 
}
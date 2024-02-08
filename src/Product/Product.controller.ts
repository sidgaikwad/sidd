import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./Product.service";
import { Productdto } from "./Product.dto";
import { Products } from "./Product.entity";
import { AuthService } from "src/auth/auth.service";
@Controller('Create')

export class ProductController {
    constructor(private Productservice: ProductService, private userservice: AuthService) {}


@Post('product')
@UsePipes(ValidationPipe)
async Product(@Body() product: Productdto): Promise<Products>{
    const user = this.userservice.getUserId(product.userID)
    return await this.Productservice.CreateNewProduct(product, user)
    console.log(product)
}
}
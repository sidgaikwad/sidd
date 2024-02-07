import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { authdto } from "./auth.dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    @UsePipes(ValidationPipe)
    async signup(@Body() userdata: authdto) {
       return (
       await this.authService.createNewAuth(userdata),
       console.log(userdata)
       );
    }

    @Post('login')
    login() {
        return this.authService.login()
    }
}
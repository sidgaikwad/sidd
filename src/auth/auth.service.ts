import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    login() {
        return {msg: 'hii from login'};
    }

    signup(){
        return {msg: 'hii from signup'};
    }
}

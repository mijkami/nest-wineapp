import { AuthService } from './auth/auth.service';
import { CreateUserDto } from "./users/dto/create-user.dto";
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: CreateUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}

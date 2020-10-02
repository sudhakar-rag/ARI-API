import { IsString } from "class-validator";

export class LoginRequestData {
    @IsString()
    email: string;

    @IsString()
    password: string;
}